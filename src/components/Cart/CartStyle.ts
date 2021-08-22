import styled from "styled-components";
import { device } from "../utils";
export const Container = styled.div`
  text-align: center;
  background-color: white;
  min-height: 35vh;
  padding-top: 5em;
`;

export const CartWrapper = styled.div`
  margin-bottom: -1em;
  display: grid;

  @media ${device.mobileS} {
    grid-template-columns: repeat(1, 12fr);
  }
  @media ${device.tablet} {
    grid-template-columns: 7fr 5fr;
  }
`;
