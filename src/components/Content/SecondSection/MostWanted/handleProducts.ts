import { IProducts } from "../../../../store/fetchProducts/types";

const handleProducts = (arr: IProducts[], slideCount?: number) => {
  //If slideCount not entered return 6 items as default
  //Else return given number of slideCount which arrays
  const count = slideCount === undefined ? 6 : slideCount;
  //Split the array to given number of arrays
  const arrayLength = Math.max(arr.length / count, 1);
  const newArray = [];
  for (let i = 0; i < count; i++) {
    if (arrayLength * (i + 1) <= arr.length) {
      newArray.push(arr.slice(arrayLength * i, arrayLength * (i + 1)));
    }
  }
  return newArray;
};

export default handleProducts;
