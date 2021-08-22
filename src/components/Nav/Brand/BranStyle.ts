import styled from "styled-components";
import { device, colours, fonts } from "../../utils";

export const Container = styled.div`
  font-family: ${fonts.greatVibes};
  display: flex;
  justify-content: center;
  text-align: center;
  margin-left: 1em;
  a {
    display: flex;
    text-decoration: none;
  }
  @media ${device.tabletLaptop} {
    margin: 1em 0 0 1em;
  }
  @media ${device.laptop} {
    margin: 1em 0 0 1em;
  }
`;

export const Image = styled.img`
  width: 3.5em;
  height: 3.5em;
  padding: 0;
  margin: 0;
  @media ${device.mobileL} {
    width: 4em;
    height: 4em;
  }
  @media ${device.mobileTablet} {
    width: 5em;
    height: 5em;
  }
  @media ${device.tabletLaptop} {
    width: 3.5em;
    height: 3.5em;
  }
  @media ${device.laptop} {
    width: 4em;
    height: 4em;
  }
  @media ${device.desktop} {
    width: 7em;
    height: 7em;
  }
`;
export const Text = styled.span`
  font-size: 1.5em;
  padding: 0;
  margin-top: 0.7em;
  color: ${colours.primaryText};
  font-weight: 700;
  @media ${device.mobileL} {
    font-size: 1.7em;
  }
  @media ${device.mobileTablet} {
    font-size: 2em;
  }
  @media ${device.tabletLaptop} {
    font-size: 1.5em;
  }
  @media ${device.laptop} {
    font-size: 1.7em;
  }
  @media ${device.desktop} {
    font-size: 3em;
  }
`;
