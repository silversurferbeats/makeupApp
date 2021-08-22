import styled from "styled-components";
import { device, fonts, colours } from "../../utils";
interface Toggle {
  toggle: boolean;
}
export const Container = styled.div`
  height: 100vh;
  width: ${(p: Toggle) => (p.toggle ? "70%" : "0")};
  position: fixed;
  padding-top: 3em;
  top: 0;
  z-index: 1;
  overflow-x: hidden;
  transition: 0.5s;
  text-transform: capitalize;
  background-color: ${colours.background};
  font-family: ${fonts.montserrat};
  @media ${device.mobileTablet} {
    width: ${(p: Toggle) => (p.toggle ? "60%" : "0")};
  }
  @media ${device.tablet} {
    width: ${(p: Toggle) => (p.toggle ? "50%" : "0")};
  }
`;

export const SearchClose = styled.div`
  display: flex;
  justify-content: space-evenly;
  /* Search for mobile menu*/
  input {
    width: 90%;
    height: 100%;
    padding: 1em;
    margin: 1em;
    margin-bottom: 0;
    font-size: 1.1em;
    font-style: italic;
    font-family: ${fonts.montserrat};
    border: none;
    border-bottom: 1px solid grey;
    background: transparent;
    outline: none;
  }
  /* Line under the close button */
  hr {
    width: 90%;
    color: lightgray;
    opacity: 0.5;
  }
`;
