import { SEARCH_FILTER, PRODUCT_TAGS, REMOVE_TAGS, IFilter } from "./types";

export const searchFilter = (filter: IFilter) => {
  return {
    type: SEARCH_FILTER,
    payload: filter
  };
};

export const searchTags = (tags: string[]) => {
  return {
    type: PRODUCT_TAGS,
    payload: tags
  };
};

export const removeTags = (tags: string) => {
  return {
    type: REMOVE_TAGS,
    payload: tags
  };
};
