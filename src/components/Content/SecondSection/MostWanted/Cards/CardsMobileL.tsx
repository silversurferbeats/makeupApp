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
  @media ${device.mobileL} {
    display: flex;
  }
  @media ${device.mobileTablet} {
    display: none;
  }
`;
const CardContainer = styled.div`
  display: flex;
  .card-container {
    @media ${device.mobileL} {
      margin: 0.2em;
    }
  }
  .card-image {
    @media ${device.mobileL} {
      height: 8em;
    }
  }
`;
const CardsMobileL: React.FC<Props> = ({ products }) => {
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

export default CardsMobileL;
