import React from "react";
import styled from "styled-components";
import { colours, fonts } from "../../utils";
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Link = styled.a`
  text-decoration: none;
  outline: none;
  color: ${colours.primaryText};
  font-family: ${fonts.montserrat};
  margin: 0.5em;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${colours.pink};
  }
`;

interface Props {}

const Links: React.FC<Props> = () => {
  return (
    <Container>
      <Link href="#?">POLITICAS</Link>
      <Link href="#?">TEMINOS Y CONDICIONES</Link>
      <Link href="#?">AYUDA</Link>
    </Container>
  );
};

export default Links;
