import React from "react";
import { SlideWrapper } from "./SliderStyle";
interface Props {
  rangeMin: number;
  rangeMax: number;
  values: { min: number; max: number };
  setValues: React.Dispatch<
    React.SetStateAction<{
      min: number;
      max: number;
    }>
  >;
}

const Slider: React.FC<Props> = ({ rangeMax, rangeMin, values, setValues }) => {
  const handleMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (e.target.id === "min" && value < values.max)
      setValues({ min: value, max: values.max });
  };

  const handleMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (e.target.id === "max" && value > values.min)
      setValues({ min: values.min, max: value });
  };
  return (
    <SlideWrapper>
      <div
        className="multi-range"
        data-lbound={`${rangeMin}`}
        data-ubound={`${rangeMax}`}>
        <hr />
        <input
          id="min"
          type="range"
          min={`${rangeMin}`}
          max={`${rangeMax}`}
          step="5"
          value={values.min}
          onChange={handleMin}
        />
        <input
          id="max"
          type="range"
          min={`${rangeMin}`}
          max={`${rangeMax}`}
          step="5"
          value={values.max}
          onChange={handleMax}
        />
      </div>
      <p>
        Range:
        <strong>
          {values.min}$~{values.max}$
        </strong>
      </p>
    </SlideWrapper>
  );
};

export default Slider;
