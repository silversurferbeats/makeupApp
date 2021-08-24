import styled from "styled-components";
import background from "./mainPic.jpg";
import { colours } from "../utils";

export const Container = styled.div``;

export const Content = styled.div`
  /* Center content from here*/
  /* Use this if you want to center elements in to div */
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1.5em;
`;

export const MainSection = styled.div`
  background-image: url(${background});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  transition: 0.5s;
  margin-bottom: 1em;
`;
export const MiddleSection = styled.div`
  /* TODO: Adjust margin left/right side for every device */
  overflow-x: hidden;
  margin: 1em 2em;
  background: black;
  border-radius: 0.5em;
  box-shadow: ${colours.boxShadow};
`;
export const FooterSection = styled.div``;
