import React from "react";
import { SecondFormInput } from "./SecondFormInput";
import { SecondFormSelect } from "./SecondFormSelect";

export const SecondFieldForm = ({ value, direction }) => {
  return (
    <form className="table-form">
      <SecondFormInput />

      <SecondFormSelect value={value} direction={direction} />
    </form>
  );
};
