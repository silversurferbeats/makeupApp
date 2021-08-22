import React from "react";
import { Container, CartWrapper } from "./CartStyle";
import { useSelector } from "react-redux";
import { IProducts } from "../../store/fetchProducts/types";
import CartDetail from "./Detail/CartDetail";
import Summary from "./Summary/Summary";
import Footer from "../../components/Content/Footer/Footer";
interface Props {}
interface CartProps {
  cartStore: {
    cart: {
      product: IProducts;
      count: number;
    }[];
  };
}

const Cart: React.FC<Props> = () => {
  const cart = useSelector((state: CartProps) => state.cartStore.cart);
  const renderItems = (
    <CartWrapper>
      <CartDetail cart={cart} />
      <Summary cart={cart} />
    </CartWrapper>
  );
  const renderEmpty = <CartWrapper>no items in cart</CartWrapper>;
  return (
    <Container>
      {cart.length > 0 ? renderItems : renderEmpty}
      <Footer />
    </Container>
  );
};

export default Cart;
