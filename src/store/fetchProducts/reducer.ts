import {
  PRODUCTS_ERROR,
  PRODUCTS_SUCCESS,
  PRODUCTS_FETCH,
  ProductsActionTypes,
  ProductsState
} from "./types";
//Initial data structure defined in types
const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: null
};

const fetchProductReducer = (
  state = initialState,
  action: ProductsActionTypes
) => {
  switch (action.type) {
    //If action type is fetching make start loading.
    case PRODUCTS_FETCH:
      return { ...state, isLoading: true };
    case PRODUCTS_SUCCESS:
      //If action type is success make loading stop and push data to state
      //To push all the data to state use JavaScript spread operator
      return { ...state, isLoading: false, products: action.payload };
    case PRODUCTS_ERROR:
      //If action type is error make loading stop and push error to state
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

export default fetchProductReducer;
