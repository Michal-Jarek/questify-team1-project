import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setNewCard: (state, { payload }) => payload,
    addCard: (state, { payload }) => payload,
    deleteCard: (state, { payload }) => initialState,
  
  },
});

export const { setNewCard } = cardSlice.actions;

export default cardSlice.reducer;
