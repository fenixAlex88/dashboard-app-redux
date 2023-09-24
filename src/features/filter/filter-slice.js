import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "@@filter",
    initialState: [],
    reducers: {
        addFiltre: (state, action) => {
            if (!state.includes(action.payload)) {
                state.push(action.payload);
            }
        },
        removeFiltre: (state, action) => {
            return state.filter((item) => item !== action.payload);
        },
        clearFiltre: () => [],
    },
});

export const { addFiltre, removeFiltre, clearFiltre } = filterSlice.actions;
export const filterReducer =  filterSlice.reducer;
export const selectFilters = (state) => state.filters;