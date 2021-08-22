import React, { useCallback } from "react";
import { getBrand } from "../../../getTypes";
import { useDispatch } from "react-redux";
import { searchFilter } from "../../../../store/searchFilter/action";
import Selectbox from "../../../UI/Selectbox/Selectbox";
interface Props {
  products: [];
  isLoading: boolean;
}

const Brands: React.FC<Props> = ({ products, isLoading }) => {
  const brands = getBrand(products);
  const dispatch = useDispatch();
  const handleSelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.options[e.target.selectedIndex].value;
      dispatch(searchFilter({ brand: value }));
    },
    [dispatch]
  );
  return (
    <Selectbox
      options={brands}
      label="Brands :"
      defaultValue={`${isLoading ? "Loading.." : "Choose here."}`}
      onChange={handleSelect}
    />
  );
};

export default Brands;
