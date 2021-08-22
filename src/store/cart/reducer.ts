import {
  ADD_CART,
  UPDATE_CART,
  REMOVE_CART,
  CartState,
  CartActions
} from "./types";

const initialState: CartState = {
  cart: []
};

const cartReducer = (state = initialState, action: CartActions) => {
  switch (action.type) {
    case ADD_CART:
      if (state.cart.length >= 0) {
        const id = state.cart.map((item) => item.product.id);
        if (id.indexOf(action.payload.product.id) === -1) {
          return { ...state, cart: state.cart.concat(action.payload) };
        } else {
          const selected = id.indexOf(action.payload.product.id);
          const newCount = action.payload.count;
          const oldCount = state.cart[selected].count;
          state.cart.splice(selected, 1);
          const newObj = {
            product: action.payload.product,
            count: newCount + oldCount
          };
          return { ...state, cart: state.cart.concat(newObj) };
        }
      }
      return state;
    case UPDATE_CART:
      if (state.cart.length >= 0) {
        const id = state.cart.map((item) => item.product.id);
        if (id.indexOf(action.payload.product.id) === -1) {
          return state;
        } else {
          const selected = id.indexOf(action.payload.product.id);
          const count = state.cart[selected].count;
          const update = action.payload.update;
          if (update === "increment") {
            const newObj = {
              product: action.payload.product,
              count: count + 1
            };
            return {
              ...state,
              cart: [
                ...state.cart.slice(0, selected),
                newObj,
                ...state.cart.slice(selected + 1)
              ]
            };
          } else if (update === "decrement" && count > 1) {
            const newObj = {
              product: action.payload.product,
              count: count - 1
            };
            return {
              ...state,
              cart: [
                ...state.cart.slice(0, selected),
                newObj,
                ...state.cart.slice(selected + 1)
              ]
            };
          }
          return state;
        }
      }
      return state;
    case REMOVE_CART:
      if (state.cart.length > 0) {
        const id = state.cart.map((item) => item.product.id);
        if (id.indexOf(action.payload.product.id) === -1) {
          return state;
        } else {
          return {
            ...state,
            cart: state.cart.filter(
              (item) => item.product.id !== action.payload.product.id
            )
          };
        }
      }
      return state;
    default:
      return state;
  }
};

export default cartReducer;
