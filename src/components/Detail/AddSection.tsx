import React, { useState } from "react";
import styled from "styled-components";
import { colours, fonts, device } from "../utils";
import { AddCart } from "../UI/Cart/Carts";

interface Props {
  product: {};
  price: string;
}
const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  @media ${device.mobileS} {
    justify-content: center;
  }
  @media ${device.laptop} {
    justify-content: flex-start;
  }
  h3 {
    font-family: ${fonts.raleway};
    color: ${colours.primaryText};
    font-weight: 100;
    font-size: 1.5em;
  }
  div:last-child {
    margin-left: 1em;
  }
  button {
    font-family: ${fonts.aBeeZee};
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5em;
    outline: none;
    i {
      color: ${colours.primaryText};
      &:hover {
        color: ${colours.pink};
      }
    }
  }
  input {
    color: ${colours.primaryText};
    font-family: ${fonts.aBeeZee};
    width: 2em;
    height: 2em;
    text-align: center;
    font-size: 1.5em;
    margin: 0 0.5em;
    cursor: context-menu;
  }
`;
const AddSection: React.FC<Props> = ({ product, price }) => {
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 1) return setCount(count - 1);
  };
  return (
    <Container>
      <div>
        <h3>$ {price}</h3>
      </div>
      <div>
        <button onClick={handleDecrement}>
          <i className="fas fa-minus" />
        </button>
        <input value={count} readOnly />
        <button onClick={handleIncrement}>
          <i className="fas fa-plus" />
        </button>
        <AddCart product={product} count={count} />
      </div>
    </Container>
  );
};

export default AddSection;
