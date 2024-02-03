import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

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
export const selectFilterValue = (state) => state.filter.filter;
export default filterSlice.reducer;

//Selectors
