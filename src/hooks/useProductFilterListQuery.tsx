import { useQuery } from "@tanstack/react-query";
import { Category, productFilteredList } from "../api/products";

export const useProductFilterListQuery = (category: Category) => {
  return useQuery(["productFilterList", category], () =>
    productFilteredList(category)
  );
};
