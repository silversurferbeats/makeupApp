import React, { useCallback } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addCart } from "../../../store/cart/actions";
import { colours, fonts } from "../../utils";
const AddButton = styled.button`
  background-color: transparent;
  padding: 0.5em;
  border: 1px solid ${colours.pink};
  outline: none;
  font-family: ${fonts.montserrat};
  font-weight: 700;
  transition: 0.5s;
  color: ${colours.pink};
  cursor: pointer;
  &:hover {
    color: ${colours.background};
    background-color: ${colours.pink};
  }
`;
interface Props {
  product: {};
  count: number;
}

const AddCart: React.FC<Props> = ({ product, count }) => {
  const dispatch = useDispatch();
  const handleAdd = useCallback(() => {
    dispatch(addCart({ product: product, count: count }));
  }, [dispatch, product, count]);
  return <AddButton onClick={handleAdd}>Add Cart</AddButton>;
};

export default AddCart;
