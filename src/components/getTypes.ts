import { IProducts } from "../store/fetchProducts/types";

export const getCategory = (data: []) => {
  const productTypes = data
    .filter((items: IProducts) => {
      return items.category;
    })
    .map((items: IProducts) => {
      return items.category.replace(/_/g, " ");
    });
  const categories = productTypes.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  return categories.sort();
};

export const getType = (data: []) => {
  const productTypes = data
    .filter((items: IProducts) => {
      return items.product_type;
    })
    .map((items: IProducts) => {
      return items.product_type.replace(/_/g, " ");
    });
  const types = productTypes.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  return types.sort();
};

export const getBrand = (data: []) => {
  const productTypes = data
    .filter((items: IProducts) => {
      return items.brand;
    })
    .map((items: IProducts) => {
      return items.brand.replace(/_/g, " ");
    });
  const brands = productTypes.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  return brands.sort();
};

export const randomItems = (data: [], count?: number) => {
  //If count not entered return 15 items else return given number of items
  //Starts from 100
  const getCount = count === undefined ? 15 : count;
  const Items = data
    .filter((items: IProducts, index) => {
      return index > 100 && index < 101 + getCount;
    })
    .map((items: IProducts) => {
      return items;
    });

  return Items.sort();
};

//TODO: check productTags
export const getTags = (data: []) => {
  const tagList: string[] = [];
  const productTags = data
    .filter((items: IProducts) => {
      return items.tag_list.length > 0;
    })
    .map((item: IProducts) => {
      return item.tag_list.map((tag) => {
        return tagList.push(tag);
      });
    });

  const tag = tagList.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  return tag;
};

export const getProduct = (data: [], productID: number) => {
  const product = data
    .filter((items: IProducts) => {
      return items.id === productID;
    })
    .map((item: IProducts) => {
      return item;
    });

  return product;
};
