import styled from "styled-components";
import { device, colours, fonts } from "../../../utils";

export const DropContainer = styled.div`
  &:hover > div {
    display: block;
    margin-left: 85%;
  }
`;
export const DropButton = styled.button`
  background: transparent;
  margin: 0.5em 0;
  padding: 0.5em;
  border: none;
  outline: none;
  color: white;
  font-family: ${fonts.montserrat};
  font-size: 1.1em;
  font-weight: 800;
  font-style: italic;
  text-transform: uppercase;
  cursor: pointer;
  width: 100%;
  text-align: left;
  &:hover:before {
    z-index: 1;
    content: " ";
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent transparent ${colours.pink};
    position: absolute;
    right: -0.8em;
  }

  @media ${device.tabletLaptop} {
    font-size: 0.9em;
  }
  @media ${device.laptop} {
    font-size: 1em;
  }
  @media ${device.desktop} {
    font-size: 2em;
  }
`;

export const DropContent = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 1em;
  width: 35vw;
  height: 90%;
  div {
    background-color: ${colours.background};
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1.05em;
    margin-left: 0.2em;
    padding-left: 1em;
    overflow-y: scroll;
    overflow-x: hidden;
    ${colours.scroll};
  }
`;
export const DropItem = styled.li`
  padding: 0.5em;
  display: grid;
  grid-gap: 0;
  text-transform: capitalize;
  font-family: ${fonts.raleway};
  cursor: pointer;
  a {
    text-decoration: none;
    color: ${colours.pink};
  }
  @media ${device.tabletLaptop} {
    font-size: 1em;
  }
  @media ${device.desktop} {
    font-size: 1.5em;
  }
  &:hover {
    transform: scale(1.1, 1.1);
    color: ${colours.primaryText};
    font-weight: 700;
  }
`;
