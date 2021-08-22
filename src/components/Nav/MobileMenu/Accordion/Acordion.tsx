import React, { useState, useCallback } from "react";
import {
  AccordionContainer,
  AccordionContent,
  AccordionList
} from "./AcordionStyle";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchFilter } from "../../../../store/searchFilter/action";
import { toggleSidebar } from "../../../../store/sidebarToggle/actions";
import { IFilter } from "../../../../store/searchFilter/types";
interface Props {
  title: string;
  content: string[];
  activeIndex: number;
  url: string;
  searchFilter?: {
    filters: IFilter;
  };
}

const Accordion: React.FC<Props> = ({ title, content, activeIndex, url }) => {
  const [index, setIndex] = useState(-1);
  //Accordion toggle
  const handleToggle = () => {
    if (index !== activeIndex) return setIndex(activeIndex);
    //If accordion is open close
    if (index === activeIndex) return setIndex(-1);
  };
  const dispatch = useDispatch();
  const handleFilter = useCallback(
    (filterSection: string, filter: string) => {
      dispatch(searchFilter({ [filterSection]: filter }));
      dispatch(toggleSidebar());
    },
    [dispatch]
  );

  return (
    <AccordionContainer>
      <AccordionContent
        index={index}
        activeId={activeIndex}
        onClick={handleToggle}>
        {title} <span>&#x279B;</span>
      </AccordionContent>
      {content.length < 1 ? (
        <AccordionList index={index} activeId={activeIndex}>
          Loading..
        </AccordionList>
      ) : (
        content.map((item, key) => (
          <AccordionList index={index} activeId={activeIndex} key={key}>
            <Link
              to={`/shop`}
              onClick={() => {
                handleFilter(url, item);
              }}>
              {item}
            </Link>
          </AccordionList>
        ))
      )}
    </AccordionContainer>
  );
};

export default Accordion;
