import axios from "axios";
import { Dispatch } from "react";

import {
  PRODUCT_ERROR,
  PRODUCT_FETCH,
  PRODUCT_SUCCESS,
  ProductActionTypes
} from "./types";

export function fetchProduct(...params: string[]) {
  //Dont know how mant filters will going to add
  //First parameter wont get & sign
  //Rest of the parameters will get & sign
  //For that purpose first parameter filtered and added as a first parameter
  //rest of the parameters mapped with & sign but this added comma for every parameter which will cause error
  //For avoid this error concat rest parameters with & sign and this will not add comma
  //And no parameter entered wont get errors
  const firstParam = params
    .filter((v, i) => {
      return i === 0;
    })
    .map((v, i) => v);
  const rest = params
    .filter((v, i) => {
      return i > 0;
    })
    .map((v, i) => `&${v}`);
  const restParam = "";
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products.json?${firstParam}${restParam.concat(
    ...rest
  )}`;
  const request = axios.get(apiUrl);

  return (dispatch: Dispatch<ProductActionTypes>) => {
    dispatch({
      type: PRODUCT_FETCH
    });
    request
      .then(({ data }) => {
        dispatch({
          type: PRODUCT_SUCCESS,
          payload: data
        });
      })
      .catch((error) => {
        dispatch({
          type: PRODUCT_ERROR,
          error: error
        });
      });
  };
}
