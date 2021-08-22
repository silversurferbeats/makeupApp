import styled from "styled-components";
import { device, colours } from "../../../utils";

export const Container = styled.div`
  font-size: 1.4em;
  display: flex;
  justify-content: center;
  margin-right: 1em;

  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.mobileL} {
    display: none;
  }
  @media ${device.mobileM} {
    display: none;
  }
  @media ${device.tablet} {
    display: none;
  }
  @media ${device.tabletLaptop} {
    display: block;
    margin-right: 0.5em;
  }

  @media ${device.laptop} {
    font-size: 1.5em;
  }
  @media ${device.desktop} {
    font-size: 3em;
    margin-right: 1em;
  }
`;
interface IconProps {
  scroll: boolean;
}
export const Icon = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  color: ${(p: IconProps) =>
    p.scroll ? `${colours.primaryText}` : `${colours.secondaryText}`};
  @media ${device.laptop} {
    color: ${colours.primaryText};
  }
`;
export const Button = styled.a``;
