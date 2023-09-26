import { useQuery } from "@tanstack/react-query";
import { ProductDetailParam, productDetail } from "../api/products";

export const useProductDetailQuery = (productId: ProductDetailParam) => {
  return useQuery(["productDetail", productId], () => productDetail(productId));
};
