import React, { useState, useEffect, useCallback } from "react";
import {
  PagiContent,
  ContentWrapper,
  PagiList,
  Container,
  PaginationWrapper,
  PagiButton,
  PagiBottom
} from "./PaginationStyle";
interface Props {
  children: React.ReactNode;
}

const Pagination: React.FC<Props> = ({ children }) => {
  const [itemPerPage] = useState(12);
  const [activePage, setActivePage] = useState(0);
  const [upperBound, setUpperBound] = useState(5);
  const [lowerBound, setLowerBound] = useState(0);
  const [pageBound] = useState(5);
  const content = React.Children.map(children, (child, index) => {
    return child;
  });
  const indexOfLastItem = activePage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const activeContent = content.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(content.length / itemPerPage); i++) {
    pageNumbers.push(i);
  }
  //Page active actions
  const handleActivePage = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ): void => {
    let target = e.target as HTMLLIElement;
    setActivePage(parseFloat(target.id));
  };

  const handleActive = useCallback(() => {
    if (activePage === 0) {
      setActivePage(1);
    } else if (activePage > pageNumbers.length) {
      setActivePage(1);
    }
  }, [activePage, pageNumbers.length]);
  useEffect(() => {
    handleActive();
  }, [activePage, pageNumbers, handleActive]);

  //Next & Prev Buttons
  const handleNext = () => {
    if (activePage + 1 > upperBound) {
      setUpperBound(upperBound + pageBound);
      setLowerBound(lowerBound + pageBound);
    }
    if (activePage !== pageNumbers.length) {
      setActivePage(activePage + 1);
    }
  };
  const handlePrev = () => {
    if ((activePage - 1) % pageBound === 0) {
      setUpperBound(upperBound - pageBound);
      setLowerBound(lowerBound - pageBound);
    }
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };

  //RENDERING ACTIONS
  //Render Numbers

  const renderPageNumbers = pageNumbers
    .filter((number, index) => {
      return number < upperBound + 1 && number > lowerBound;
    })
    .map((number, index) => (
      <PagiList
        key={index}
        id={`${number}`}
        activeId={number}
        activePage={activePage}
        onClick={handleActivePage}>
        {number}
      </PagiList>
    ));

  //Render content
  const renderContent = React.Children.map(activeContent, (children, index) => (
    <PagiContent key={index}>{children}</PagiContent>
  ));
  return (
    <Container>
      <ContentWrapper>{renderContent}</ContentWrapper>
      <PaginationWrapper>
        <PagiBottom>
          <PagiButton disabled={activePage === 1} onClick={handlePrev}>
            &#8592;
          </PagiButton>
          {renderPageNumbers}
          <PagiButton
            disabled={activePage === pageNumbers.length}
            onClick={handleNext}>
            &#8594;
          </PagiButton>
        </PagiBottom>
      </PaginationWrapper>
    </Container>
  );
};

export default Pagination;
