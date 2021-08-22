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
  @media ${device.mobileTablet} {
    display: flex;
  }
  @media ${device.laptopL} {
    display: none;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .card-image {
    @media ${device.mobileTablet} {
      height: 8em;
    }
  }
  .card-container {
    .card-content {
      @media ${device.mobileTablet} {
        display: grid;
        margin: 0 auto;
        text-align: center;
      }
      @media ${device.tablet} {
        display: flex;
      }
    }
    @media ${device.laptop} {
      width: 15em;
    }
  }
  .card-price {
    @media ${device.mobileTablet} {
      padding: 0.5em 0;
    }
    @media ${device.tablet} {
      padding: 0;
    }
  }
`;
const CardsTablet: React.FC<Props> = ({ products }) => {
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

export default CardsTablet;
