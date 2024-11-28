import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light"
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"; // On bascule entre 'light' et 'dark'
        }
    }
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
