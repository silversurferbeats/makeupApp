import Increment from "./Increment";
import Decrement from "./Decrement";
import Remove from "./Remove";
import Name from "./Name";
import Count from "./Count";
import Image from "./Image";
import AddCart from "./AddCart";
import { IProducts } from "../../../store/fetchProducts/types";

const total = (cart: { product: IProducts; count: number }[]) => {
  const totals = cart.map((item) => {
    const price = parseFloat(item.product.price);
    return price * item.count;
  });
  return totals.reduce((sum, next) => {
    return (sum = sum + next);
  });
};

export { Increment, Decrement, Remove, Name, Count, Image, AddCart, total };
