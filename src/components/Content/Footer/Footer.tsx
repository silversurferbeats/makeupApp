import React from "react";
import { Container, FootSection, BrandContainer } from "./FooterStyle";
import Links from "./Links";
import Brand from "../../Nav/Brand/Brand";
import Social from "./Social";
interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <Container>
      <FootSection>
        <Links />
        <BrandContainer>
          <Brand />
        </BrandContainer>
        <Social />
      </FootSection>
      <p>
        <span>Cosmeticos de Belleza</span> 
      </p>
    </Container>
  );
};

export default Footer;
