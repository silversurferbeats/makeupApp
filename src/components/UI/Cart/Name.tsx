import React from "react";
import { Link } from "react-router-dom";
import { IProducts } from "../../../store/fetchProducts/types";
import { colours } from "../../utils";
import styled from "styled-components";
interface Props {
  product: IProducts;
}
const NameLink = styled(Link)`
  font-weight: 600;
  &&& {
    text-decoration: none;
    color: ${colours.primaryText};
    &:hover {
      color: ${colours.pink};
    }
  }
`;
const Name: React.FC<Props> = ({ product }) => {
  return <NameLink to={`/product/${product.id}`}>{product.name}</NameLink>;
};

export default Name;
