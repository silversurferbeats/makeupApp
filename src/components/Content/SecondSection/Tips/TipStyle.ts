import styled from "styled-components";
import { device } from "../../../utils";
export const Container = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: repeat(1, 12fr);
  padding-bottom: 3em;
  @media ${device.mobileTablet} {
    grid-template-columns: repeat(3, 4fr);
  }
`;
export const TipContainer = styled.div`
  width: 100%;
`;
