import { useMutation } from "@tanstack/react-query";
import { addProduct } from "../api/products";

export const useAddProductMutation = () => {
  return useMutation(addProduct, {
    onSuccess: () => {
      alert("Product added");
    },
    onError: () => {
      alert("Product not added");
    },
  });
};
