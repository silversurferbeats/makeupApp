export interface ProductState {
  product: IProduct[];
  isLoading: boolean;
  error: null;
}

export interface IProduct {
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

export const PRODUCT_FETCH = "PRODUCT_FETCH";
export const PRODUCT_SUCCESS = "PRODUCT_SUCCESS";
export const PRODUCT_ERROR = "PRODUCT_ERROR";

interface ProductFetch {
  type: typeof PRODUCT_FETCH;
}
interface ProductSuccess {
  type: typeof PRODUCT_SUCCESS;
  payload: IProduct[];
}
interface ProductError {
  type: typeof PRODUCT_ERROR;
  error: null;
}

export type ProductActionTypes = ProductFetch | ProductSuccess | ProductError;
