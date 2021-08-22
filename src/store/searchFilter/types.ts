export interface FilterState {
  filters: IFilter;
  product_tags: string[];
}

export interface IFilter {
  product_type?: string;
  product_category?: string;
  brand?: string;
  price_greater_than?: number;
  price_less_than?: number;
}

export const SEARCH_FILTER = "SEARCH_FILTER";
export const PRODUCT_TAGS = "PRODUCT_TAGS";
export const REMOVE_TAGS = "REMOVE_TAGS";
interface SearchFilter {
  type: typeof SEARCH_FILTER;
  payload: IFilter;
}
interface ProductTags {
  type: typeof PRODUCT_TAGS;
  payload: string[];
}

interface RemoveTag {
  type: typeof REMOVE_TAGS;
  payload: string[];
}

export type FilterActions = SearchFilter | ProductTags | RemoveTag;
