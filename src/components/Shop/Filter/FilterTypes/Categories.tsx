import React, { useCallback } from "react";
import { getCategory } from "../../../getTypes";
import { searchFilter } from "../../../../store/searchFilter/action";
import { useDispatch } from "react-redux";
import Selectbox from "../../../UI/Selectbox/Selectbox";
interface Props {
  products: [];
  isLoading: boolean;
}

const Categories: React.FC<Props> = ({ products, isLoading }) => {
  const categories = getCategory(products);
  const dispatch = useDispatch();
  const handleSelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.options[e.target.selectedIndex].value;
      dispatch(searchFilter({ product_category: value }));
    },
    [dispatch]
  );
  return (
    <Selectbox
      options={categories}
      label="Categories :"
      defaultValue={`${isLoading ? "Loading.." : "Choose here."}`}
      onChange={handleSelect}
    />
  );
};

export default Categories;
