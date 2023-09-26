import { useProductFilterListQuery } from "../hooks/useProductFilterListQuery";
import { FilterTab } from "./FilterTab";
import { FilterTabContainer } from "./FilterTabContainer";
import { ProductItem } from "./ProductItem";

export const ProductElectronicsList = () => {
  const { data: electronicData } = useProductFilterListQuery(`electronics`);

  return (
    <FilterTabContainer>
      <section className="p-10 flex items-center justify-evenly flex-wrap h-screen">
        {electronicData &&
          electronicData.data?.map((product) => {
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
