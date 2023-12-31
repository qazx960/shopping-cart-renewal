import { useProductFilterListQuery } from "../hooks/useProductFilterListQuery";
import { FilterTab } from "./FilterTab";
import { FilterTabContainer } from "./FilterTabContainer";
import { ProductItem } from "./ProductItem";

export const ProductWomensTabList = () => {
  const { data: womenProducts } = useProductFilterListQuery(`women's clothing`);

  return (
    <FilterTabContainer>

      <section className="p-10 flex items-center justify-evenly flex-wrap h-screen">
        {womenProducts &&
          womenProducts.data?.map((product) => {
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
