import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setNewCard: (state, { payload }) => payload,
    deleteStateCard: (state, { payload }) => initialState,
  },
});

export const { setNewCard, deleteStateCard } = cardSlice.actions;

export default cardSlice.reducer;
