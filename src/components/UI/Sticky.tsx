import React from "react";
import styled from "styled-components";
import { device } from "../utils";
interface Props {
  children: React.ReactNode;
}
const Container = styled.div`
  @media ${device.tablet} {
    position: -webkit-sticky;
    position: sticky;
    top: 9em;
  }
`;

const Sticky: React.FC<Props> = ({ children }) => {
  const render = React.Children.map(children, (child, index) => child);
  return <Container>{render}</Container>;
};

export default Sticky;
