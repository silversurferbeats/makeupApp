import React from "react";
import { getType, getCategory, getBrand } from "../../getTypes";
import { useSelector } from "react-redux";
import { Container, SearchClose } from "./MenuStyle";
import Acordion from "./Accordion/Acordion";
interface StoreProps {
  sidebarToggle: {
    sideToggle: boolean;
  };
  storeProducts: {
    products: [];
  };
}

const Menu: React.FC = () => {
  const toggle = useSelector(
    (state: StoreProps) => state.sidebarToggle.sideToggle
  );
  const products = useSelector(
    (state: StoreProps) => state.storeProducts.products
  );
  const types = getType(products);
  const categories = getCategory(products);
  const brands = getBrand(products);
  return (
    <Container toggle={toggle}>
      <SearchClose>
        <input placeholder="Search here..." />
      </SearchClose>

      <Acordion
        title={"Types"}
        content={types}
        activeIndex={0}
        url="product_type"
      />
      <Acordion
        title={"Categories"}
        content={categories}
        activeIndex={1}
        url="product_category"
      />
      <Acordion title={"Brand"} content={brands} activeIndex={2} url="brand" />
    </Container>
  );
};
export default Menu;
