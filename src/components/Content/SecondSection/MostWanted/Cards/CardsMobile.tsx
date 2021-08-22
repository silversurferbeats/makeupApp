import React from "react";
import styled from "styled-components";
import { device } from "../../../../utils";
import Card from "../../../../UI/Card/Card";
import Carousel from "../../../../UI/Carousel/Carousel";
import { IProducts } from "../../../../../store/fetchProducts/types";

const Container = styled.div`
  @media ${device.mobileL} {
    display: none;
  }
`;
interface Props {
  products: IProducts[];
}

const CardsMobile: React.FC<Props> = ({ products }) => {
  return (
    <Container>
      <Carousel display="hide">
        {products.map((slide, key) => (
          <Card key={key} product={slide} />
        ))}
      </Carousel>
    </Container>
  );
};

export default CardsMobile;
