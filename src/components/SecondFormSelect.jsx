import React from "react";
import { useSelector } from "react-redux";

export const SecondFormSelect = ({ value, direction }) => {
  const trades = useSelector(state => state.trades.trades)

  let to = [];
  let compareArr = [];
  let endArr = [];

  for (let trade in trades) {
    if (trades[trade].from.code === direction) {
      to = [trades[trade].to];

      to = to[0];
    }
  }

  if (value === "" || value === "all") {
    compareArr = [
      {
        code: "BTC",
        name: "Bitcoin BTC",
      },
      {
        code: "ETH",
        name: "Ethereum ETH",
      },
      {
        code: "USDTTRC",
        name: "Tether TRC20 USDTTRC",
      },
      {
        code: "ACRUB",
        name: "Альфа-банк RUB",
      },
      {
        code: "TCSBRUB",
        name: "Тинькофф RUB",
      },
      {
        code: "SBERRUB",
        name: "Сбербанк RUB",
      },
      {
        code: "CASHRUB",
        name: "Наличные RUB",
      },
      {
        code: "CASHUSD",
        name: "Наличные USD",
      },
      {
        code: "PMUSD",
        name: "PerfectMoney USD",
      },
      {
        code: "TRX",
        name: "TRON TRX",
      },
      {
        code: "P24UAH",
        name: "Приват24 UAH",
      },
      {
        code: "MONOBUAH",
        name: "Монобанк UAH",
      },
      {
        code: "CARDUAH",
        name: "Visa/Mastercard UAH",
      },
      {
        code: "CARDRUB",
        name: "Visa/Mastercard RUB",
      },
      {
        code: "QWRUB",
        name: "Qiwi RUB",
      },
      {
        code: "WIREUAH",
        name: "Любой банк UAH",
      },
      {
        code: "OSDBUAH",
        name: "Ощадбанк UAH",
      },
      {
        code: "CASHAED",
        name: "Наличные AED",
      },
      {
        code: "CNTRUB",
        name: "Qiwi Contact RUB",
      },
    ];
  } else if (value === "crypts") {
    compareArr = [
      {
        code: "BTC",
        name: "Bitcoin BTC",
      },
      {
        code: "ETH",
        name: "Ethereum ETH",
      },
      {
        code: "USDTTRC",
        name: "Tether TRC20 USDTTRC",
      },
      {
        code: "PMUSD",
        name: "PerfectMoney USD",
      },
      {
        code: "TRX",
        name: "TRON TRX",
      },
      {
        code: "CARDUAH",
        name: "Visa/Mastercard UAH",
      },
      {
        code: "CARDRUB",
        name: "Visa/Mastercard RUB",
      },
      {
        code: "QWRUB",
        name: "Qiwi RUB",
      },
      {
        code: "CNTRUB",
        name: "Qiwi Contact RUB",
      },
    ];
  } else if (value === "banks") {
    compareArr = [
      {
        code: "ACRUB",
        name: "Альфа-банк RUB",
      },
      {
        code: "TCSBRUB",
        name: "Тинькофф RUB",
      },
      {
        code: "SBERRUB",
        name: "Сбербанк RUB",
      },
      {
        code: "P24UAH",
        name: "Приват24 UAH",
      },
      {
        code: "MONOBUAH",
        name: "Монобанк UAH",
      },
      {
        code: "WIREUAH",
        name: "Любой банк UAH",
      },
      {
        code: "OSDBUAH",
        name: "Ощадбанк UAH",
      },
    ];
  } else if (value === "cash") {
    compareArr = [
      {
        code: "CASHRUB",
        name: "Наличные RUB",
      },
      {
        code: "CASHUSD",
        name: "Наличные USD",
      },
      {
        code: "CASHAED",
        name: "Наличные AED",
      },
    ];
  }


  // console.log(value)
  // console.log(to)
  // console.log(compareArr)

  for (let item in to) {
    if (JSON.stringify(compareArr).includes(JSON.stringify(to[item]))) {
      endArr.push(to[item]);
    }
  }

  return (
    <select className="table-form__select">
      <option value=""></option>
      {endArr.map((x) => (
        <option key={x.code} value={x.name}>
          {x.name}
        </option>
      ))}
    </select>
  );
};
