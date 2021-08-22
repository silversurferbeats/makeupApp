import React from "react";

interface Props {
  url: string;
}
const ImgStyle = {
  width: "3em",
  height: "3em"
};
const Image: React.FC<Props> = ({ url }) => {
  return <img style={ImgStyle} src={url} alt={`cart-${url}`} />;
};

export default Image;
