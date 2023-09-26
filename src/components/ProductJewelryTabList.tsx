import { useProductFilterListQuery } from "../hooks/useProductFilterListQuery";
import { FilterTab } from "./FilterTab";
import { ProductItem } from "./ProductItem";

export const ProductJewelryTabList = () => {
  const { data: jeweleryData } = useProductFilterListQuery(`jewelery`);

  return (
    <>
      <FilterTab />
      <section className="p-10 flex items-center justify-evenly flex-wrap h-screen">
        {jeweleryData &&
          jeweleryData.data?.map((product) => {
            return (
              <div key={product.id}>
                <ProductItem productId={product.id} />
              </div>
            );
          })}
      </section>
    </>
  );
};
