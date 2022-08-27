import { createSlice } from "@reduxjs/toolkit";

const directionSlice = createSlice({
  name: "directions",
  initialState: {
    directions: [
      {
        code: "BTC",
        name: "Bitcoin BTC",
      },
      {
        code: "ETH",
        name: "Ethereum ETH",
      },
      {
        code: "CASHUSD",
        name: "Наличные USD",
      },
      {
        code: "CASHRUB",
        name: "Наличные RUB",
      },
      {
        code: "ACRUB",
        name: "Альфа-банк RUB",
      },
      {
        code: "SBERRUB",
        name: "Сбербанк RUB",
      },
      {
        code: "TCSBRUB",
        name: "Тинькофф RUB",
      },
      {
        code: "USDTTRC",
        name: "Tether TRC20 USDT",
      },
    ],
    direction: ''
  },
  reducers: {
    setDirection(state, action) {
      state.direction = action.payload
    }
  },
});

export const { setDirection } = directionSlice.actions;

export default directionSlice.reducer;
