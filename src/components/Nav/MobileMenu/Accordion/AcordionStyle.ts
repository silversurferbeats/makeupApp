import styled from "styled-components";
import { colours } from "../../../utils";
export const AccordionContainer = styled.div``;

interface UlProps {
  activeId: number;
  index: number;
}
export const AccordionContent = styled.ul`
  color: ${colours.primaryText};
  padding-left: 0.5em;
  cursor: pointer;
  /* Used flex to prevent word-wrapping  */
  /* And saperate text and icon evenly */
  display: flex;
  justify-content: space-between;
  padding-left: 0.5em;

  span {
    padding: 0 1em;
    text-align: right;
    font-weight: 900;
    font-size: 1.5em;
    transform: ${(p: UlProps) =>
      p.activeId === p.index ? "rotate(90deg)" : "rotate(180deg)"};
    transition: transform 0.5s;
  }
`;
interface ListProps {
  activeId: number;
  index: number;
}

export const AccordionList = styled.li`
  display: ${(p: ListProps) => (p.activeId === p.index ? "block" : "none")};
  list-style: none;
  margin: 1em 0 1em 1em;
  padding-left: 0.5em;
  transition: all 0.3s ease;
  cursor: pointer;
  a {
    text-decoration: none;
    color: ${colours.primaryText};
  }
  :active {
    border: none;
    background-color: transparent;
  }
`;
