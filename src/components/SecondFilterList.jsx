import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FilterItem } from "./FilterItem";

export const SecondFilterList = ({ get }) => {
  const filters = useSelector(state => state.filters.filters)

  const [filter, setFilter] = useState("");

  const updateFilter = (filter) => {
    setFilter(filter);
  };

  get(filter);

  return (
    <form className="table-filter-list">
      {filters.map((category) => (
        <FilterItem
          category={category}
          filter={updateFilter}
          key={category.id}
        />
      ))}
    </form>
  );
};
