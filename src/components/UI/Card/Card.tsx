import React from "react";
import { AddCart } from "../Cart/Carts";
import { CardContent, Container, Name, Title, Img, Price } from "./CardStyle";
import { Link } from "react-router-dom";
import { IProducts } from "../../../store/fetchProducts/types";

interface CardProps {
  product: IProducts;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    // TODO: use card container class to style card
    <Container className="card-container">
      <Link to={`/product/${product.id}`}>
        <Img
          className="card-image"
          src={product.api_featured_image}
          alt={`${product.name}-image`}
        />
      </Link>
      <CardContent>
        <Link to={`/product/${product.id}`}>
          <Title className="card-title">{product.brand}</Title>
          <Name className="card-name">{product.name}</Name>
        </Link>
        <div className="card-content">
          <Price className="card-price">{`$ ${
            product.price === null ? "10" : product.price
          }`}</Price>
          <AddCart product={product} count={1} />
        </div>
      </CardContent>
    </Container>
  );
};

export default Card;
