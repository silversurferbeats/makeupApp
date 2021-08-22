import styled from "styled-components";
import { colours, fonts, device } from "../../utils";

export const Container = styled.div`
  width: 100%;
`;
export const ContentWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(3, 4fr);
  @media ${device.mobileS} {
    grid-template-columns: repeat(1, 12fr);
  }
  @media ${device.mobileL} {
    grid-template-columns: repeat(2, 6fr);
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(3, 4fr);
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(4, 3fr);
  }
`;

export const PagiContent = styled.div``;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${fonts.montserrat};
  div {
    display: flex;
    align-items: center;
    border: 1px solid ${colours.pink};
    padding: 0.5em;
  }
`;
interface PagilistProps {
  activePage: number;
  activeId: number;
}

const active = `
  border-bottom:2px solid ${colours.pink};
`;
export const PagiBottom = styled.div`
  margin-top: 0.5em;
`;
export const PagiList = styled.li`
  ${(p: PagilistProps) => (p.activePage === p.activeId ? active : "")}
  list-style: none;
  padding: 0 0.3em;
  transition: 0.5s;
  cursor: pointer;
`;

export const PagiButton = styled.button`
  color: ${colours.primaryText};
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    color: gray;
  }
`;
