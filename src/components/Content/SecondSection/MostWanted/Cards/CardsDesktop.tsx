import React from "react";
import styled from "styled-components";
import { device } from "../../../../utils";
import Card from "../../../../UI/Card/Card";
import Carousel from "../../../../UI/Carousel/Carousel";
import { IProducts } from "../../../../../store/fetchProducts/types";

interface Props {
  products: IProducts[][];
}
const Container = styled.div`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.laptopL} {
    display: flex;
  }
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .card-container {
    @media ${device.desktopL} {
      margin: 2em;
    }
  }
  .card-title {
    @media ${device.desktopL} {
      font-size: 2.5em;
    }
  }
  .card-name {
    @media ${device.desktopL} {
      font-size: 2em;
    }
  }
  .card-price {
    @media ${device.desktopL} {
      font-size: 1.8em;
    }
  }
  .card-button {
    @media ${device.desktopL} {
      font-size: 1.7em;
    }
  }
  .card-image {
    @media ${device.desktopL} {
      height: 15em;
    }
  }
`;
const CardsDesktop: React.FC<Props> = ({ products }) => {
  return (
    <Container>
      <Carousel display="hide">
        {products.map((arr, key) => (
          <CardContainer key={key}>
            {arr.map((slide, key) => (
              <Card key={key} product={slide} />
            ))}
          </CardContainer>
        ))}
      </Carousel>
    </Container>
  );
};

export default CardsDesktop;
