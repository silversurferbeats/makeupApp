import styled from "styled-components";
import { colours, fonts, device } from "../utils";
export const Container = styled.div`
  background: white;
  text-align: center;
`;

export const Parallax = styled.div`
  background-color: white;
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    color: ${colours.pink};
    font-family: ${fonts.raleway};
    font-style: italic;
    font-size: 1.5em;
    position: absolute;
  }
`;
export const Content = styled.div`
  margin-top: -2em;
  margin-left: 2em;
  margin-right: 2em;
  display: grid;
  text-align: center;

  @media ${device.mobileS} {
    grid-template-columns: repeat(1, 12fr);
  }
  @media ${device.laptop} {
    grid-template-columns: 4fr 8fr;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    @media ${device.mobileS} {
      width: 50%;
    }
    @media ${device.mobileTablet} {
      width: 30%;
    }
    @media ${device.laptop} {
      width: 60%;
    }
  }
`;

export const DetailContainer = styled.div`
  text-align: left;
  display: grid;
  padding: 1em;
`;
export const Splitter = styled.hr`
  width: 100%;
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, ${colours.pink}, transparent);
`;
export const DetailHead = styled.h4`
  font-family: ${fonts.raleway};
  font-size: 1.1em;
  padding: 0;
  margin: 0;
  color: ${colours.pink};
`;
export const DetailText = styled.p`
  font-family: ${fonts.aBeeZee};
  padding: 0;
  padding-left: 0.3em;
  margin: 0;
  margin-bottom: 1em;
  color: ${colours.primaryText};
`;

export const TagColourContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 0.5em;
`;

export const Tag = styled.span`
  border: 1px solid grey;
  border-radius: 0.3em;
  background: transparent;
  font-family: ${fonts.raleway};
  text-transform: capitalize;
  margin: 0.3em;
  padding: 0.3em;
  cursor: pointer;
`;
