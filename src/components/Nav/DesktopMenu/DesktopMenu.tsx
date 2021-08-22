import React from "react";
import {
  MenuContainer,
  MenuItem,
  MenuDropDown,
  DropContent
} from "./DesktopStyle";
import Dropdown from "./Dropdown/Dropdown";
import { getBrand, getCategory, getType } from "../../getTypes";
import { useSelector } from "react-redux";
interface StoreProps {
  storeProducts: {
    products: [];
  };
}

const DesktopMenu: React.FC = () => {
  const products = useSelector(
    (state: StoreProps) => state.storeProducts.products
  );
  const brands = getBrand(products);
  const categories = getCategory(products);
  const types = getType(products);

  return (
    <MenuContainer>
      <MenuItem>
        <h4>Home</h4>
      </MenuItem>
      <MenuItem>
        <h4>Shop</h4>
        <MenuDropDown>
          <DropContent>
            <Dropdown title="Types" content={types} url="product_type" />
            <Dropdown
              title="Categories"
              content={categories}
              url="product_category"
            />
            <Dropdown title="Brands" content={brands} url="brand" />
          </DropContent>
        </MenuDropDown>
      </MenuItem>
    </MenuContainer>
  );
};

export default DesktopMenu;
