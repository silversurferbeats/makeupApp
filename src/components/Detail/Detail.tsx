import React, { useEffect, useState } from "react";
import {
  Container,
  Content,
  Parallax,
  ImgContainer,
  DetailContainer,
  DetailHead,
  DetailText,
  Splitter,
  TagColourContainer,
  Tag
} from "./DetailStyle";
import { getProduct } from "../getTypes";
import Footer from "../Content/Footer/Footer";
import Colours from "./Colours";
import AddSection from "./AddSection";
import { useSelector } from "react-redux";
import { IProducts } from "../../store/fetchProducts/types";
import Sticky from "../UI/Sticky";
interface Props {
  match: {
    params: {
      id: string;
    };
  };
  storeProducts: {
    products: [];
  };
}

const Detail: React.FC<Props> = ({ match }) => {
  const products = useSelector((state: Props) => state.storeProducts.products);
  const [product, setProduct] = useState<IProducts[]>([]);

  useEffect(() => {
    const id = parseFloat(match.params.id);
    setProduct(getProduct(products, id));
  }, [match.params.id, products]);

  if (product.length === 0)
    return (
      <Container>
        <Parallax />
        <p>Loading..</p>
      </Container>
    );

  const renderColours = (
    <>
      <DetailHead>Colours</DetailHead>
      <Splitter />
      <TagColourContainer>
        {product[0].product_colors.map((colour, index) => (
          <Colours
            key={index}
            hex={colour.hex_value}
            name={colour.colour_name}
          />
        ))}
      </TagColourContainer>
    </>
  );

  const renderTags = (
    <>
      <DetailHead>Tags</DetailHead>
      <Splitter />
      <TagColourContainer>
        {product[0].tag_list.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagColourContainer>
    </>
  );

  const renderDescription = (
    <>
      <DetailHead>Description</DetailHead>
      <Splitter />
      <DetailText>{product[0].description.replace(":", ": ")}</DetailText>
    </>
  );

  return (
    <Container>
      <Parallax>
        <h3>{product[0].name}</h3>
      </Parallax>
      <Content>
        <ImgContainer>
          <Sticky>
            <img
              src={product[0].api_featured_image}
              alt={`${product[0].name}`}
            />
          </Sticky>
        </ImgContainer>
        <DetailContainer>
          <AddSection product={product[0]} price={product[0].price} />
          {product[0].product_colors.length > 0 ? renderColours : ""}
          {product[0].tag_list.length > 0 ? renderTags : ""}
          {product[0].description.length > 0 ? renderDescription : ""}
        </DetailContainer>
      </Content>
      <Footer />
    </Container>
  );
};

export default Detail;
