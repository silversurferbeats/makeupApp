import { ADD_CART, UPDATE_CART, REMOVE_CART } from "./types";

export const addCart = (cart: {}) => {
  return {
    type: ADD_CART,
    payload: cart
  };
};

export const updateCart = (cart: {}) => {
  return {
    type: UPDATE_CART,
    payload: cart
  };
};

export const removeCart = (cart: {}) => {
  return {
    type: REMOVE_CART,
    payload: cart
  };
};
