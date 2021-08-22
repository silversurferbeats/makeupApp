import React from "react";
import { imgArray } from "./brandImages";
import handleContent from "./brandImages";
import styled from "styled-components";
import { device } from "../../../utils";
import Carousel from "../../../UI/Carousel/Carousel";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .indicator-container {
    margin-top: -5em;
  }
  @media ${device.desktop} {
    display: none;
  }
`;
const Mobile = styled.div`
  @media ${device.mobileL} {
    display: none;
  }
`;
const MobileImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
`;
const Tablet = styled.div`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.mobileL} {
    display: block;
  }
  @media ${device.tablet} {
    display: block;
  }
  @media ${device.tabletLaptop} {
    display: none;
  }
`;
const TabletImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 4em;
    @media ${device.tablet} {
      height: 6em;
    }
  }
`;

const Brands: React.FC = () => {
  const tabletImages = handleContent(3);
  return (
    <Container>
      <Mobile>
        <Carousel>
          {imgArray.map((image, key) => (
            <MobileImage key={key}>
              <img src={image} alt={`brand-${key}`} />
            </MobileImage>
          ))}
        </Carousel>
      </Mobile>
      <Tablet>
        <Carousel>
          {tabletImages.map((arr, key) => (
            <TabletImage key={key}>
              {arr.map((image, key) => (
                <img src={image} key={key} alt={`brand-${key}`} />
              ))}
            </TabletImage>
          ))}
        </Carousel>
      </Tablet>
    </Container>
  );
};

export default Brands;
