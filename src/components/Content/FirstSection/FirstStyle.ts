import styled from "styled-components";
import { fonts, device, colours } from "../../utils";
export const MainText = styled.div`
  position: absolute;
  top: 14em;
  left: 5em;
  @media ${device.mobileS} {
    top: 11em;
    left: 1em;
  }
  @media ${device.laptop} {
    top: 13em;
    left: 5em;
  }
  @media ${device.desktop} {
    top: 40vh;
  }
  h4 {
    font-family: ${fonts.greatVibes};
    font-size: 1.5em;
    color: ${colours.primaryText};
    font-weight: 600;
    margin-left: 1em;
    @media ${device.mobileM} {
      font-size: 1.7em;
    }
    @media ${device.desktop} {
      font-size: 3em;
    }
  }
  p {
    margin: 0;
    font-family: ${fonts.montserrat};
    color: ${colours.primaryText};
    font-weight: 400;
    @media ${device.desktop} {
      font-size: 2em;
    }
    span {
      color: ${colours.pink};
      word-spacing: 12em;
      font-size: 2em;
      font-family: ${fonts.greatVibes};
      font-weight: 600;
      @media ${device.desktop} {
        font-size: 3em;
      }
    }
  }

  div {
    margin-top: 2em;
    display: flex;
    justify-content: space-around;
    a {
      padding: 1em;
      text-decoration: none;
      border: 1px solid ${colours.pink};
      color: ${colours.pink};
      background-color: transparent;
      outline: none;
      font-family: ${fonts.montserrat};
      font-size: 1em;
      font-weight: 800;
      transition: 0.5s;
      @media ${device.desktop} {
        font-size: 2em;
      }
      :hover {
        color: white;
        background-color: ${colours.pink};
      }
    }
  }

  #secondText {
    margin-left: 6em;
    @media ${device.mobileL} {
      margin-left: 8em;
    }
    @media ${device.mobileTablet} {
      margin-left: 9em;
    }
    @media ${device.tablet} {
      margin-left: 9.5em;
    }
    span {
      /* Used filter to make text color a little darker */
      /* Equvalent to darken function used in SASS */
      filter: brightness(50%);
    }
  }
`;
