import styled from "styled-components";
import { device, fonts } from "../../utils";
export const Container = styled.div`
  margin: 0 1em;
  overflow: hidden;
  
  

  h3 {
    text-align: center;
    font-family: ${fonts.montserrat};
    font-size: 1.5em;
  }
  @media ${device.mobileL} {
    padding-right: 0.5em;
  }
  @media ${device.laptop} {
    padding-right: 1em;
  }
  @media ${device.laptopL} {
    padding-right: 2em;
  }
`;
