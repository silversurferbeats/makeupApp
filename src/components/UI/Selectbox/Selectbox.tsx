import React from "react";
import styled from "styled-components";
import { fonts } from "../../utils";
const Container = styled.div`
  font-family: ${fonts.aBeeZee};
  label {
    margin-bottom: 0.5em;
    font-weight: 600;
  }
  hr {
    border: 0.5px solid lightgrey;
    margin-bottom: 0.5em;
  }
  select {
    text-transform: capitalize;
    font-family: ${fonts.aBeeZee};
    width: 100%;
    padding: 0.5em;
    margin-bottom: 1em;
    font-size: 1em;
  }
`;
interface Props {
  options: (string | number)[];
  label: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Selectbox: React.FC<Props> = ({
  defaultValue = "Choose here",
  options,
  label,
  onChange
}) => {
  return (
    <Container>
      <label>{label}</label>
      <hr />
      <select onChange={onChange}>
        <option value="">{defaultValue}</option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Selectbox;
