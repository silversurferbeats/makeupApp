import styled from "styled-components";
import { colours, fonts, device } from "../utils";
export const Container = styled.div`
  /* padding-top: 5.5em; */
  background-color: white;
`;

export const Parallax = styled.div`
  background-color: white;
  /* background-attachment: fixed; */
  /* background-position: center; */
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    color: ${colours.pink};
    font-family: ${fonts.raleway};
    font-style: italic;
    font-size: 2em;
    position: absolute;
  }
`;

export const Content = styled.div`

  

  border-radius: 2px;
  box-shadow: ${colours.boxShadow};
  margin-top: -2em;
  margin-left: 0.7em;
  margin-right: 0.7em;
  padding: 1em;
  @media ${device.mobileS} {
    grid-template-columns: 1fr;
  }
  @media ${device.laptop} {
    grid-template-columns: 3fr 9fr;
  }
  .card-container {
    @media ${device.desktopL} {
      margin: 2em;
    }
  }
  .card-title {
    @media ${device.desktopL} {
      font-size: 2.5em;
    }
  }
  .card-name {
    @media ${device.desktopL} {
      font-size: 2em;
    }
  }
  .card-price {
    @media ${device.desktopL} {
      font-size: 1.8em;
    }
  }
  .card-button {
    @media ${device.desktopL} {
      font-size: 1.7em;
    }
  }
  .card-image {
    @media ${device.desktopL} {
      height: 15em;
    }
  }
`;
