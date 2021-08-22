import React, { useCallback } from "react";
import styled from "styled-components";
import { IFilter } from "../../../store/searchFilter/types";
import { searchFilter, removeTags } from "../../../store/searchFilter/action";
import { useDispatch } from "react-redux";
interface Props {
  activeFilters: IFilter;
  tags: string[];
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Filter = styled.div`
  text-transform: capitalize;
  border: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2em;
  margin: 0.5em;
  p {
    padding: 0.5em;
  }
  button {
    height: 100%;
    margin-left: 0.5em;
    background-color: transparent;
    border: none;
    border-left: 1px double grey;
    cursor: pointer;
  }
`;

const Filters: React.FC<Props> = ({ activeFilters, tags }) => {
  const dispatch = useDispatch();

  const filters = Object.entries(activeFilters);
  const values = filters
    .filter(
      (filter) => filter[1] !== "" && filter[1] !== 0 && filter[1] !== 100
    )
    .map((filter) => filter);

  const removeFilter = useCallback(
    (filterSection: string) => {
      dispatch(searchFilter({ [filterSection]: "" }));
    },
    [dispatch]
  );

  const removeTag = useCallback(
    (tag: string) => {
      dispatch(removeTags(tag));
    },
    [dispatch]
  );
  return (
    <Container>
      {values.map((filter, i) => {
        const type = filter[0].replace(/_/g, " ").replace("product", "");
        const value = filter[1];
        return (
          <Filter key={i}>
            <p>
              {type}={value}
            </p>
            <button
              onClick={() => {
                removeFilter(filter[0]);
              }}>
              X
            </button>
          </Filter>
        );
      })}
      {tags.map((item, index) => (
        <Filter key={index}>
          <p>{item}</p>
          <button
            onClick={() => {
              removeTag(item);
            }}>
            <i className="fas fa-times" />
          </button>
        </Filter>
      ))}
    </Container>
  );
};

export default Filters;
