import React from "react";
import { Container, Header } from "./WantedStyle";
import Cards from "./Cards/Cards";

const Wanted: React.FC = () => {
  return (
    <Container>
      <Header>Most Search Items</Header>
      <Cards />
    </Container>
  );
};

export default Wanted;
