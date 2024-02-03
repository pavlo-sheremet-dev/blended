import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilterValue(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { changeFilterValue } = filterSlice.actions;

export default filterSlice.reducer;

//Selectors
