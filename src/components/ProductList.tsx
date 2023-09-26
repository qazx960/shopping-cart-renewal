import { useProductListQuery } from "../hooks/useProductListQuery";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
  const { data: products, isLoading, isError } = useProductListQuery();
  // console.log(products);
  // const productId = products?.data?.id;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error...</h1>;
  }
  return (
    <section className="p-10 flex items-center justify-evenly flex-wrap h-screen">
      {products &&
        products.data?.map((product) => {
          return (
            <div key={product.id}>
              <ProductItem productId={product.id} />
            </div>
          );
        })}
    </section>
  );
};
