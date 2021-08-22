import React from "react";
import { Container, MainSection, Content, MiddleSection } from "./MainStyle";
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import Footer from "./Footer/Footer";

const Main: React.FC = () => {
  return (
    <Container>
      <MainSection>
        <Content>
          <FirstSection />
        </Content>
      </MainSection>
      <MiddleSection>
        <Content>
          <SecondSection />
        </Content>
      </MiddleSection>
      <Footer />
    </Container>
  );
};

export default Main;
