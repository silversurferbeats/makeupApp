import React from "react";
import { InputContainer, Input } from "./BoxStyle";

import { useSelector } from "react-redux";
interface Toggle {
  searchToggle: {
    toggle: boolean;
  };
}

const Box: React.FC = () => {
  const searchToggle = useSelector(
    (state: Toggle) => state.searchToggle.toggle
  );
  return (
    <InputContainer>
      <Input placeholder="Search here.." searchToggle={searchToggle} />
    </InputContainer>
  );
};

export default Box;
