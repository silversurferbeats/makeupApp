import axios from "axios";
import { Dispatch } from "react";
import {
  PRODUCTS_ERROR,
  PRODUCTS_SUCCESS,
  PRODUCTS_FETCH,
  ProductsActionTypes
} from "./types";

export function fetchProducts() {
  //Do this for more usability and readability
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products.json`;
  const request = axios.get(apiUrl);

  //Defined dispatch type here
  //Which takes defined action types as a parameter
  return (dispatch: Dispatch<ProductsActionTypes>) => {
    //When function is called first change isLoading to true
    //This way could use spinners and loaders
    dispatch({
      type: PRODUCTS_FETCH
    });
    //Axios fetching starts here
    //Axios returns response in a data object
    //Use Javascript destructuring to get directly data
    request
      .then(({ data }) => {
        //If response is succesfull return dispatch with data
        dispatch({
          type: PRODUCTS_SUCCESS,
          payload: data
        });
      })
      //If error return dispatch with error
      .catch((error) => {
        dispatch({
          type: PRODUCTS_ERROR,
          error: error
        });
      });
  };
}
