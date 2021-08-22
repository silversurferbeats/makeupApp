import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0.3em;
  position: relative;
  user-select: none;
  display: inline-block;
  cursor: pointer;
  &:hover > span {
    visibility: visible;
  }
`;
interface ColourProps {
  colour: string;
}
const Colour = styled.div`
  width: 2em;
  height: 2em;
  border-radius: 50%;
  background-color: ${(p: ColourProps) => `${p.colour}`};
`;

const Name = styled.span`
  visibility: hidden;
  width: 160px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -80px;
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
`;
interface Props {
  name: string;
  hex: string;
}

const Colours: React.FC<Props> = ({ name, hex }) => {
  return (
    <Container>
      <Colour colour={hex} />
      <Name>{name}</Name>
    </Container>
  );
};

export default Colours;
