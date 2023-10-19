import { useQuery } from "@tanstack/react-query";
import { cartList } from "../api/cart";

export const useCartListQuery = () => {
  return useQuery(["cartItems"], () => cartList());
};
