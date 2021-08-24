import React from "react";
import { Container, Image, Text } from "./BranStyle";
import { Link } from "react-router-dom";
import image from "./makeup.png";

const Brand: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        
        <Text>Make Up</Text>
      </Link>
    </Container>
  );
};

export default Brand;

// esta imagen la saque de al lado del <text> makeUp dentro de <link>
// <Image src={image} />