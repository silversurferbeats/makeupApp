import React, { useState, useEffect } from "react";
import Slider from "../../../UI/Slider/Slider";
import { searchFilter } from "../../../../store/searchFilter/action";
import { useDispatch } from "react-redux";

interface Props {}

const Price: React.FC<Props> = () => {
  const [values, setValues] = useState({ min: 0, max: 100 });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      searchFilter({
        price_greater_than: values.min,
        price_less_than: values.max
      })
    );
  }, [dispatch, values.max, values.min]);

  return (
    <div>
      <Slider
        rangeMin={0}
        rangeMax={100}
        values={values}
        setValues={setValues}
      />
    </div>
  );
};

export default Price;
