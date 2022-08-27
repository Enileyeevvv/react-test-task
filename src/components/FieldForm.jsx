import React, { useState } from "react";
import { FormInput } from "./FormInput";
import { FormSelect } from "./FormSelect";

export const FieldForm = ({ filter, get }) => {
  const [direction, setDirection] = useState("");

  const updateDirection = (direction) => {
    setDirection(direction);
  };

  get(direction);
  return (
    <form className="table-form">
      <FormInput />

      <FormSelect filter={filter} update={updateDirection} />
    </form>
  );
};
