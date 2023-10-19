import React from "react";
import { useCartListQuery } from "../hooks/useCartListQuery";

export const CartsPage = () => {
  const { data, isLoading, isError } = useCartListQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error...</h1>;
  }

  console.log(data);

  return <div>CartsPage</div>;
};
