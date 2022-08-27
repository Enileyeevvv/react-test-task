import React, { useState } from "react";
import { useSelector } from "react-redux";

export const FormSelect = ({ filter, update }) => {
  let directions = useSelector((state) => state.directions.directions);

  if (filter === "crypts") {
    directions = [
      {
        code: "BTC",
        name: "Bitcoin BTC ",
      },
      {
        code: "ETH",
        name: "Ethereum ETH ",
      },
      {
        code: "USDTTRC",
        name: " Tether TRC-20 USDTTRC",
      },
    ];
  } else if (filter === "banks") {
    directions = [
      {
        code: "ACRUB",
        name: "Альфа-банк RUB ",
      },
      {
        code: "SBERRUB",
        name: "Сбербанк RUB ",
      },
      {
        code: "TCSBRUB",
        name: "Тинькофф RUB ",
      },
    ];
  } else if (filter === "cash") {
    directions = [
      {
        code: "CASHUSD",
        name: "Наличные USD ",
      },
      {
        code: "CASHRUB",
        name: "Наличные RUB ",
      },
    ];
  }

  const [direction, setDirection] = useState("");


  return (
    <select
      className="table-form__select"
      onChange={(event) => {
        setDirection(event.target.value);
        update(event.target.value);
      }}
    >
      <option value=""></option>
      {directions.map((direction) => (
        <option key={direction.code} value={direction.code}>
          {direction.name}
        </option>
      ))}
    </select>
  );
};
