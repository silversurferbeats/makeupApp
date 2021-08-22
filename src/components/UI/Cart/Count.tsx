import React from "react";
import Decrement from "./Decrement";
import Increment from "./Increment";
import { IProducts } from "../../../store/fetchProducts/types";

interface Props {
  product: IProducts;
  count: number;
}

const Count: React.FC<Props> = ({ product, count }) => {
  return (
    <>
      <Decrement product={product} />
      <span>{count}</span>
      <Increment product={product} />
      <strong>x</strong> ${product.price}
    </>
  );
};

export default Count;
