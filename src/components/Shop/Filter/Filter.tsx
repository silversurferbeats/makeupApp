import React from "react";
import MobileFilter from "./MobileFilter";
import DesktopFilter from "./DesktopFilter";
interface Props {
  products: [];
  isLoading: boolean;
}

const Filter: React.FC<Props> = ({ products, isLoading }) => {
  return (
    <>
      <MobileFilter products={products} isLoading={isLoading} />
      <DesktopFilter products={products} isLoading={isLoading} />
    </>
  );
};

export default Filter;
