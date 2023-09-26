import { useQuery } from "@tanstack/react-query";
import { productList } from "../api/products";

export const useProductListQuery = () => {
  return useQuery(["productList"], () => productList());
};
