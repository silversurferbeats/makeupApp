import styled from "styled-components";
import { device, fonts, colours } from "../../utils";
import parallax from "./p1.jpg";
export const Container = styled.div`
  margin: 0 2em;
  width: 90%;
`;
export const BrandSection = styled.div`
  margin-bottom: 3em;
  margin-top: 1em;
  img {
    opacity: 0.5;
    transition: transform 0.5s;
    &:hover {
      opacity: 1;
      transform: scale(1.07);
    }
  }
`;
export const WantedSection = styled.div``;

export const Parallax = styled.div`
  background-image: url(${parallax});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 1em 0 1em -5vw;

  @media ${device.mobileS} {
    background-attachment: initial;
    height: 10vh;
  }

  @media ${device.tablet} {
    height: 20vh;
    background-attachment: fixed;
    color: ${colours.pink};
  }
  @media ${device.laptopL} {
    height: 15vh;
    background-attachment: fixed;
    color: ${colours.pink};
  }
  h3 {
    margin-right: 3.5em;
    font-family: ${fonts.aBeeZee};
    background: linear-gradient(
      to right,
      ${colours.pink},
      ${colours.primaryText}
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media ${device.mobileS} {
      font-size: 1em;
      font-weight: 600;
    }
    @media ${device.mobileTablet} {
      font-size: 1.5em;
    }
    @media ${device.laptopL} {
      font-size: 2em;
    }
    @media ${device.desktop} {
      font-size: 2.3em;
    }
  }
`;
