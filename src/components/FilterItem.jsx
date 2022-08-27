import React from "react";

export const FilterItem = ({ category, filter }) => {
  return (
    <div
      className="table-filter-list__item"
      onChange={(event) => filter(event.target.value)}
    >
      <input
        name="filter"
        type="radio"
        value={category.value}
        id={category.id}
      />
      <label>{category.name}</label>
    </div>
  );
};
