import { ProductList } from "../components/ProductList";
// import { FilterTab } from "../components/FilterTab";
import { FilterTabContainer } from "../components/FilterTabContainer";

export const ProductsPage = () => {
  return (
    <FilterTabContainer>
      {/* <FilterTab /> */}
      <ProductList />
    </FilterTabContainer>
  );
};
