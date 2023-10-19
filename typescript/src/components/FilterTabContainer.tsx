import React from "react";
import { FilterTab } from "./FilterTab";

export const FilterTabContainer = ({ children }) => {
  return (
    <section>
      <FilterTab />
      {children}
    </section>
  );
};
