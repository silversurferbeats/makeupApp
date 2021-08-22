//Define main store here
export interface ProductsState {
  products: IProducts[];
  isLoading: boolean;
  error: null;
}
//Define api call structure here

export interface IProducts {
  id: number;
  brand: string;
  name: string;
  price: string;
  price_sign: string;
  currency: string;
  image_link: string;
  product_link: string;
  website_link: string;
  description: string;
  category: string;
  product_type: string;
  tag_list: string[];
  created_at: string;
  updated_at: string;
  product_api_url: string;
  api_featured_image: string;
  product_colors: {
    hex_value: string;
    colour_name: string;
  }[];
}

//Define types that will be using in actions and reducers!
export const PRODUCTS_FETCH = "PRODUCTS_FETCH";
export const PRODUCTS_SUCCESS = "PRODUCTS_SUCCESS";
export const PRODUCTS_ERROR = "PRODUCTS_ERROR";

//Define action types here:
//If fetching isLoading: true
interface ProductsFetch {
  type: typeof PRODUCTS_FETCH;
}
//If success isLoading: false, payload: IProducts which defined before
interface ProductsSuccess {
  type: typeof PRODUCTS_SUCCESS;
  //IMPORTANT: payload and Reducer initialState type MUST be the same
  payload: IProducts[];
}
//If error isLoading:false, error: action.error
interface ProductsError {
  type: typeof PRODUCTS_ERROR;
  error: null;
}
//Exporting the action types
export type ProductsActionTypes =
  | ProductsFetch
  | ProductsSuccess
  | ProductsError;
