import { ProductList } from "../components/ProductList";
import { FilterTab } from "../components/FilterTab";

export const ProductsPage = () => {
  return (
    <section>
      <FilterTab />
      <ProductList />
    </section>
  );
};
