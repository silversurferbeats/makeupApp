import React from "react";
import { Container, TipContainer } from "./TipStyle";
import Tip from "../../../UI/TipCard/Tip";
import content from "./tipContent";
interface Props {}

const Tips: React.FC<Props> = () => {
  return (
    <Container>
      {content.map((tip, key) => (
        <TipContainer key={key}>
          <Tip imgUrl={tip.imgUrl} title={tip.title} />
        </TipContainer>
      ))}
    </Container>
  );
};

export default Tips;
