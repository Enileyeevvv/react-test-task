import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    filters: [
      {
        id: 0,
        name: "Все",
        value: "all",
      },
      {
        id: 1,
        name: "Криптовалюты",
        value: "crypts",
      },
      {
        id: 2,
        name: "Банки",
        value: "banks",
      },
      {
        id: 3,
        name: "Наличные",
        value: "cash",
      },
    ],
    // filter: '',
  },
  reducers: {
    // getFilter(state, action) {
    //   state.filter = action.payload.filter;
    // },
  },
});

export const { getFilter } = filterSlice.actions;

export default filterSlice.reducer;
