import React from "react";
import styled from "styled-components";
import { device, fonts } from "../../utils";
import Tags from "./FilterTypes/Tags";
import Price from "./FilterTypes/Price";
import Types from "./FilterTypes/Types";
import Categories from "./FilterTypes/Categories";
import Brands from "./FilterTypes/Brands";

const Container = styled.div`
  text-align: center;

  h3 {
    font-family: ${fonts.raleway};
    font-weight: 200;
    font-size: 1.5em;
  }
  hr {
    border: 0.4px solid lightgrey;
  }
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.laptop} {
    display: block;
  }
`;
const FilterWrapper = styled.div`
  display: grid;
  text-align: left;
  padding: 0 1em;
`;

interface Props {
  products: [];
  isLoading: boolean;
}

const DesktopFilter: React.FC<Props> = ({ products, isLoading }) => {
  return (
    <Container>
      <h3>Filter By</h3>
      <hr />
      <FilterWrapper>
        <Types products={products} isLoading={isLoading} />
        <Categories products={products} isLoading={isLoading} />
        <Brands products={products} isLoading={isLoading} />
        <Price />
      </FilterWrapper>
      <Tags products={products} isLoading={isLoading} />
    </Container>
  );
};

export default DesktopFilter;
