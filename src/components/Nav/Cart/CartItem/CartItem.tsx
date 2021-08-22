import React from "react";
import { IProducts } from "../../../../store/fetchProducts/types";
import {
  Container,
  CartHeader,
  CartInfo,
  CartPrice,
  CartBottom,
  Splitter,
  ItemContainer
} from "./ItemStyle";
import { Name, Image, Remove, Count, total } from "../../../UI/Cart/Carts";
interface Props {
  cart: { product: IProducts; count: number }[];
}

const CartItem: React.FC<Props> = ({ cart }) => {
  const totalPrice = total(cart);

  const renderCart = cart.map((item, key) => {
    const price = parseFloat(
      item.product.price === null ? "10" : item.product.price
    );
    return (
      <div key={key}>
        <Container>
          <Image url={item.product.api_featured_image} />
          <CartInfo>
            <Name product={item.product} />
            <CartPrice>
              <Count product={item.product} count={item.count} />= $
              {item.count * price}
            </CartPrice>
          </CartInfo>
          <Remove product={item.product} />
        </Container>
        <Splitter />
      </div>
    );
  });

  return (
    <>
      <CartHeader>My Shopping Cart</CartHeader>
      <Splitter />
      <ItemContainer>{renderCart}</ItemContainer>
      <CartBottom>
        <CartHeader>Total: ${totalPrice}</CartHeader>
        <button>View Cart</button>
      </CartBottom>
    </>
  );
};

export default CartItem;
