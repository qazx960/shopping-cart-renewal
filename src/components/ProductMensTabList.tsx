import { useProductFilterListQuery } from "../hooks/useProductFilterListQuery";
import { FilterTabContainer } from "./FilterTabContainer";
import { ProductItem } from "./ProductItem";

export const ProductMensTabList = () => {
  const { data: menProducts } = useProductFilterListQuery(`men's clothing`);

  return (
    <FilterTabContainer>
      <section className="p-10 flex items-center justify-evenly flex-wrap h-screen">
        {menProducts &&
          menProducts.data?.map((product) => {
            return (
              <div key={product.id}>
                <ProductItem productId={product.id} />
              </div>
            );
          })}
      </section>
    </FilterTabContainer>
  );
};
