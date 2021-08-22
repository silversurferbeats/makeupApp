import React from "react";
import {
  Img,
  Container,
  CartWrapper,
  CartContent,
  EmptyText
} from "./CartStyle";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IProducts } from "../../../store/fetchProducts/types";
import CartItem from "./CartItem/CartItem";
interface Props {
  scroll: boolean;
}
interface CartProps {
  cartStore: {
    cart: {
      product: IProducts;
      count: number;
    }[];
  };
}
const Cart: React.FC<Props> = ({ scroll }) => {
  const cart = useSelector((state: CartProps) => state.cartStore.cart);
  const renderEmpty = (
    <CartContent>
      <EmptyText>Cart is empty. Shop here!</EmptyText>
    </CartContent>
  );
  const renderItems = (
    <CartContent>
      <CartItem cart={cart} />
    </CartContent>
  );
  return (
    <Container>
      <Img scroll={scroll} count={cart.length}>
        <Link to={`/cart`}>
          <i className="fas fa-shopping-basket" />
        </Link>
        <span>{cart.length}</span>
      </Img>
      <CartWrapper>{cart.length > 0 ? renderItems : renderEmpty}</CartWrapper>
    </Container>
  );
};

export default Cart;
