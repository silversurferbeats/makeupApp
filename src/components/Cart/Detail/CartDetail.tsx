import React from "react";
import {
  Container,
  ListResult,
  ListActions,
  ListDetail,
  ListImg,
  ListItems
} from "./DetailStyle";
import { IProducts } from "../../../store/fetchProducts/types";
import { Count, Remove, Name, Image } from "../../UI/Cart/Carts";
interface Props {
  cart: {
    product: IProducts;
    count: number;
  }[];
}

const CartDetail: React.FC<Props> = ({ cart }) => {
  return (
    <Container>
      <h3>Shopping Cart Detail</h3>
      <hr />
      {cart.map((item, key) => {
        const price = parseFloat(item.product.price);
        return (
          <ListItems key={key}>
            <ListImg>
              <Image url={item.product.api_featured_image} />
            </ListImg>
            <ListDetail>
              <Name product={item.product} />
            </ListDetail>
            <ListResult>
              <span>Total = ${price * item.count}</span>
            </ListResult>
            <ListActions>
              <Count product={item.product} count={item.count} />
              <Remove product={item.product} />
            </ListActions>
          </ListItems>
        );
      })}
    </Container>
  );
};

export default CartDetail;
