import React, { useCallback } from "react";
import { getType } from "../../../getTypes";
import { searchFilter } from "../../../../store/searchFilter/action";
import { useDispatch } from "react-redux";
import Selectbox from "../../../UI/Selectbox/Selectbox";

interface Props {
  products: [];
  isLoading: boolean;
}

const Types: React.FC<Props> = ({ products, isLoading }) => {
  const types = getType(products);
  const dispatch = useDispatch();
  const handleSelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.options[e.target.selectedIndex].value;
      dispatch(searchFilter({ product_type: value }));
    },
    [dispatch]
  );
  return (
    <Selectbox
      options={types}
      label="Types :"
      defaultValue={`${isLoading ? "Loading.." : "Choose here"}`}
      onChange={handleSelect}
    />
  );
};

export default Types;
