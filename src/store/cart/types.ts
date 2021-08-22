import { IProduct } from "../fetchProduct/types";

export interface CartState {
  cart: {
    product: IProduct;
    count: number;
  }[];
}

export const ADD_CART = "ADD_CART";
export const UPDATE_CART = "UPDATE_CART";
export const REMOVE_CART = "REMOVE_CART";

interface AddCart {
  type: typeof ADD_CART;
  payload: { product: IProduct; count: number };
}
interface UpdateCart {
  type: typeof UPDATE_CART;
  payload: { product: IProduct; update: string };
}
interface RemoveCart {
  type: typeof REMOVE_CART;
  payload: { product: IProduct };
}

export type CartActions = AddCart | UpdateCart | RemoveCart;
