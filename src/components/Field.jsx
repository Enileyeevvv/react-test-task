import React, { useState } from "react";
import { FieldForm } from "./FieldForm";
import { FilterList } from "./FilterList";
import { SecondField } from "./SecondField";

export const Field = () => {
  const [direction, setDirection] = useState("");
  const [filter, setFilter] = useState("");

  const getDirection = (direction) => {
    setDirection(direction);
  };

  const getFltr = (filter) => {
    setFilter(filter);
  };

  return (
    <div className="table">
      <h1 className="table__header">Отдаете</h1>

      <FilterList get={getFltr} />

      <FieldForm filter={filter} get={getDirection} />

      <SecondField direction={direction} />
    </div>
  );
};
