import React from "react";
import { MainText } from "./FirstStyle";
import { Link } from "react-router-dom";
interface Props {}

const FirstSection: React.FC<Props> = () => {
  return (
    <MainText>
      <h4>Cosmeticos de Belleza</h4>
      <p id="firstText">
        <span>Elegancia</span> en todos los sentidos.
      </p>
      <p id="secondText">
        por siempre <span>MakeUp</span>
      </p>
      <div>
        <Link to={`/shop`}>Ir a la tienda</Link>
      </div>
    </MainText>
  );
};

export default FirstSection;
