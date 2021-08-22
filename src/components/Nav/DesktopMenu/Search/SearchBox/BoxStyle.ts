import styled from "styled-components";

import { device, colours, fonts } from "../../../../utils";

// WARNING: Input container width might block dropdown functionality
export const InputContainer = styled.div`
  position: fixed;
  width: 30%;
  height: 2.5em;
  align-items: center;
  top: 5.5em;
  right: 0;
  padding: 0.5em 0;
  display: flex;
  overflow: hidden;
  transition: transform 0.5s ease-in-out;
  z-index: 1;
  @media ${device.desktop} {
    top: 8em;
    height: 5em;
  }
`;
//SEARCH INPUT
interface inputProps {
  searchToggle: boolean;
}
export const Input = styled.input`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-right: 1em;
  padding-inline-start: 1em;
  transform: ${(p: inputProps) =>
    p.searchToggle ? "translateX(0)" : "translateX(150%)"};
  transition: transform 0.5s ease-in-out;
  background-color: ${colours.background};
  color: ${colours.primaryText};
  font-size: 1em;
  font-style: italic;
  font-family: ${fonts.montserrat};
  border: 1px solid lightgray;
  outline: none;
  @media ${device.desktop} {
    font-size: 2em;
  }
`;
