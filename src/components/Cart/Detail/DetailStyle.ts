import styled from "styled-components";
import { colours, fonts, device } from "../../utils";

export const Container = styled.div`
  margin: 2em;
  @media ${device.mobileS} {
    padding: 0;
  }
  @media ${device.tablet} {
    padding: 2em;
  }

  h3 {
    font-family: ${fonts.raleway};
  }
`;

export const ListItems = styled.div`
  display: grid;
  overflow: hidden;
  font-family: ${fonts.aBeeZee};
  border: 1px solid lightgray;
  box-shadow: ${colours.boxShadow};
  border-radius: 0.3em;
  margin: 1em 0;
  padding: 0.5em;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media ${device.mobileS} {
    grid-template-columns: 5fr 7fr;
    grid-gap: 0.5em;
    font-size: 0.9em;
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(4, 3fr);
    font-size: 1em;
  }
`;

export const ListImg = styled.div`
  overflow: hidden;
  img {
    width: 5em;
    height: 5em;
  }
`;
export const ListDetail = styled.div``;
export const ListActions = styled.div``;

export const ListResult = styled.div``;
