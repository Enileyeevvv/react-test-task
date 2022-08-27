import React, { useState } from "react";
import { SecondFilterList } from "./SecondFilterList";
import { SecondFieldForm } from "./SecondFieldForm";

export const SecondField = ({ direction }) => {
  const [filter, setFilter] = useState("");
  const getFltr = (filter) => {
    setFilter(filter);
  };
  return (
    <div className="trade-table">
      <h1 className="table__header">Получаете</h1>
      <SecondFilterList get={getFltr} />
      <SecondFieldForm value={filter} direction={direction} />
    </div>
  );
};
