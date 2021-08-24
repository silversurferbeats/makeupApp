import React, { useEffect } from "react";
import { Container, Content, Parallax } from "./ShopStyle";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/fetchProduct/actions";
import Footer from "../Content/Footer/Footer";
import ProductList from "./ProductList/ProductList";
import Filter from "./Filter/Filter";
import { IFilter } from "../../store/searchFilter/types";
import Filters from "./Filters/Filters";
interface StoreProps {
  storeProduct: {
    product: [];
    isLoading: boolean;
    error: null;
  };
  searchFilter: {
    filters: IFilter;
    product_tags: string[];
  };
}
const Shop: React.FC<StoreProps> = () => {
  const dispatch = useDispatch();
  const filters = useSelector(
    (state: StoreProps) => state.searchFilter.filters
  );
  const tagSelector = useSelector(
    (state: StoreProps) => state.searchFilter.product_tags
  );
  useEffect(() => {
    const abort = new AbortController();
    dispatch(
      fetchProduct(
        `product_type=${filters.product_type}`,
        `brand=${filters.brand}`,
        `product_category=${filters.product_category}`,
        `price_greater_than=${filters.price_greater_than}`,
        `price_less_than=${filters.price_less_than}`,
        `product_tags=${tagSelector.map((tag) => tag)},`
      )
    );
    return () => {
      abort.abort();
    };
  }, [
    dispatch,
    filters.product_type,
    filters.brand,
    filters.product_category,
    filters.price_greater_than,
    filters.price_less_than,
    tagSelector
  ]);

  const isLoading = useSelector(
    (state: StoreProps) => state.storeProduct.isLoading
  );
  const products = useSelector(
    (state: StoreProps) => state.storeProduct.product
  );


  return (
    <Container>
      <Parallax>
        <h3>Tienda</h3>
      </Parallax>
      <Content>
        <Filter isLoading={isLoading} products={products} />
        <div style={{ display: "grid" }}>
          <Filters activeFilters={filters} tags={tagSelector} />
          <ProductList isLoading={isLoading} products={products} />
        </div>
      </Content>
      <Footer />
    </Container>
  );
};

export default Shop;
