import React from "react";
import {
  Container,
  BrandSection,
  WantedSection,
  Parallax
} from "./SecondStyle";

import Tips from "./Tips/Tips";
import Brands from "./Brands/Brands";
import Wanted from "./MostWanted/Wanted";
interface Props {}

const SecondSection: React.FC<Props> = () => {
  return (
    <Container>
      <BrandSection>
        <Brands />
      </BrandSection>
      <WantedSection>
        <Wanted />
      </WantedSection>
      <Parallax>
        <h3>Consejos y trucos de nuestros profecionales.</h3>
      </Parallax>
      <Tips />
    </Container>
  );
};

export default SecondSection;
