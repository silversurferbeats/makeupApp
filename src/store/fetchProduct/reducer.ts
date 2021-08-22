import {
  ProductState,
  ProductActionTypes,
  PRODUCT_FETCH,
  PRODUCT_ERROR,
  PRODUCT_SUCCESS
} from "./types";

const initialState: ProductState = {
  product: [],
  isLoading: false,
  error: null
};

const fetchProductReducer = (
  state = initialState,
  action: ProductActionTypes
) => {
  switch (action.type) {
    case PRODUCT_FETCH:
      return { ...state, isLoading: true };
    case PRODUCT_SUCCESS:
      return { ...state, isLoading: false, product: action.payload };
    case PRODUCT_ERROR:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

export default fetchProductReducer;
