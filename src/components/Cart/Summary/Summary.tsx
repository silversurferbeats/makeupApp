import React from "react";
import styled from "styled-components";
import { device, fonts, colours } from "../../utils";
import { total } from "../../UI/Cart/Carts";
import Sticky from "../../UI/Sticky";
import { IProducts } from "../../../store/fetchProducts/types";
interface Props {
  cart: {
    product: IProducts;
    count: number;
  }[];
}
const Container = styled.div`
  margin: 2em 0;
  @media ${device.mobileS} {
    padding: 0;
  }
  @media ${device.tablet} {
    padding: 2em;
  }

  h3 {
    font-family: ${fonts.raleway};
  }
`;
const SummaryInfo = styled.div`
  display: grid;
  text-align: center;
  box-shadow: ${colours.boxShadow};
  border-radius: 1em;
  padding: 0.5em 1em;
`;
const SummaryDetail = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 6fr);
  padding: 0.5em 0;
  p {
    margin: 0 0.5em;
    font-family: ${fonts.aBeeZee};
    text-align: right;
    &:last-child {
      text-align: left;
    }
  }
`;

const Summary: React.FC<Props> = ({ cart }) => {
  const totalPrice = total(cart);
  const shipping = () => {
    return totalPrice > 100 ? "free" : `$50`;
  };
  const tax = () => {
    return (totalPrice * 12) / 100;
  };
  const totalAmount = () => {
    const ship = shipping() === "free" ? 0 : 50;
    return totalPrice + tax() + ship;
  };
  return (
    <Container>
      <Sticky>
        <h3>Order Summary</h3>
        <hr />
        <SummaryInfo>
          <SummaryDetail>
            <p>Sub Total</p>
            <p>${totalPrice}</p>
          </SummaryDetail>
          <SummaryDetail>
            <p>Shipping Charge</p>
            <p>{shipping()}</p>
          </SummaryDetail>
          <SummaryDetail>
            <p>Sale Tax (%12)</p>
            <p>{tax()}</p>
          </SummaryDetail>
          <SummaryDetail>
            <p>Total Amount</p>
            <p>${totalAmount().toFixed(2)}</p>
          </SummaryDetail>
        </SummaryInfo>
      </Sticky>
    </Container>
  );
};

export default Summary;
