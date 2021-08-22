import styled from "styled-components";
import { device, colours, fonts } from "../../utils";
export const Container = styled.div`
  text-align: center;
  padding: 1em;
  line-height: 1.6;
  p {
    font-family: ${fonts.aBeeZee};
    span {
      color: ${colours.pink};
      font-size: 1.2em;
      font-weight: 900;
      font-family: ${fonts.dancingScript};
    }
  }
`;
export const BrandContainer = styled.div`
  @media ${device.mobileS} {
    margin-top: 0;
  }
  @media ${device.tablet} {
    margin-top: -1em;
  }
`;
export const FootSection = styled.div`
  margin-bottom: 1.5em;
  @media ${device.mobileS} {
    display: grid;
    grid-template-columns: repeat(1, 12fr);
    margin-top: 2.5em;
  }
  @media ${device.tablet} {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
