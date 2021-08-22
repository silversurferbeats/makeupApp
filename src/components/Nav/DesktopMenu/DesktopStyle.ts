import styled from "styled-components";
import { colours, fonts } from "../../utils";
export const MenuContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
`;
export const MenuItem = styled.div`
  &:hover > div {
    display: block;
    animation: menuFadeIn 0.3s;
    @keyframes menuFadeIn {
      from {
        opacity: 0;
        transform: translateY(10%);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
  h4 {
    cursor: pointer;
    font-weight: 100;
    padding: 0 0.5em;
    font-size: 1.2em;
    font-family: ${fonts.raleway};
  }
`;

export const MenuDropDown = styled.div`
  display: none;
  position: absolute;
`;
export const DropContent = styled.div`
  margin-top: 1em;
  display: grid;
  background-color: ${colours.pink};
`;
