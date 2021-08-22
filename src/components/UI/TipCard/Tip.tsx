import React from "react";
import styled from "styled-components";
import { device, colours, fonts } from "../../utils";
const TipContainer = styled.div`
  font-family: ${fonts.aBeeZee};
  margin: 0.5em;
  @media ${device.mobileTablet} {
    margin: 0.5em 0;
  }
`;
const TipImage = styled.img`
  width: 100%;
  @media ${device.mobileS} {
    height: 10em;
    object-fit: cover;
  }
  @media ${device.mobileL} {
    width: 90%;
  }
  @media ${device.laptopL} {
    width: 80%;
  }
  @media ${device.desktop} {
    width: 70%;
  }
  @media ${device.desktop} {
    height: 15em;
  }
`;
const TipContent = styled.div`
  padding: 0.5em;
  word-wrap: break-word;
`;
const TipHeader = styled.h4`
  margin: 0;
  /* TODO: 3 dots after 2 line of text */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  @media ${device.desktop} {
    font-size: 2em;
  }
`;

const TipButton = styled.button`
  background: transparent;
  border: 1px solid ${colours.pink};
  font-family: ${fonts.aBeeZee};
  color: ${colours.primaryText};
  padding: 0.5em;
  outline: none;
  transition: 0.5s;
  margin-top: 1em;
  &:hover {
    background-color: ${colours.pink};
  }
  @media ${device.desktop} {
    font-size: 1.7em;
  }
`;
interface Props {
  title: string;
  imgUrl: string;
}
const Tip: React.FC<Props> = ({ title, imgUrl }) => {
  return (
    <TipContainer>
      <TipImage src={imgUrl} alt="tip-images" />
      <TipContent>
        <TipHeader>{title}</TipHeader>
      </TipContent>
      <TipButton>Read More..</TipButton>
    </TipContainer>
  );
};

export default Tip;
