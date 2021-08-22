import React, { useState } from "react";
import styled from "styled-components";
import { device, fonts } from "../../utils";
import Tags from "./FilterTypes/Tags";
import Price from "./FilterTypes/Price";
import Types from "./FilterTypes/Types";
import Categories from "./FilterTypes/Categories";
import Brands from "./FilterTypes/Brands";
interface ContainerProps {
  toggle: boolean;
}

const Container = styled.div`
  max-height: ${(p: ContainerProps) => (p.toggle ? "50em" : "5em")};
  background-color: ${(p: ContainerProps) => (p.toggle ? "" : `lightpink`)};
  overflow: hidden;
  transition: max-height 0.7s, background-color 1s;
  h5 {
    cursor: pointer;
    font-family: ${fonts.raleway};
    font-size: 1.2em;
    text-align: center;
  }
  @media ${device.mobileS} {
    display: block;
  }
  @media ${device.laptop} {
    display: none;
  }
`;
const Wrapper = styled.div`
  grid-gap: 0.5em;
  @media ${device.mobileS} {
    text-align: left;
    display: grid;
  }
  @media ${device.mobileTablet} {
    grid-template-columns: repeat(2, 6fr);
  }
`;

interface Props {
  products: [];
  isLoading: boolean;
}

const MobileFilter: React.FC<Props> = ({ products, isLoading }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Container toggle={toggle}>
      <h5 onClick={handleToggle}>Filter By</h5>
      <Wrapper>
        <Types products={products} isLoading={isLoading} />
        <Categories products={products} isLoading={isLoading} />
        <Brands products={products} isLoading={isLoading} />
        <Tags products={products} isLoading={isLoading} />
      </Wrapper>
      <Price />
    </Container>
  );
};

export default MobileFilter;
