import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setAllCards: (state, { payload }) => {
      console.log(payload);
      state.cards = [...payload];
    },
    addCard: (state, { payload }) => state.cards.push(payload),
    deleteCard: (state, { payload }) => initialState,
    challengeToggle: (state, { payload }) => {
      state.challengeFIlter = !state.challengeFIlter;
    },
  },
});

export const { setAllCards, deleteUser, challengeToggle } = cardsSlice.actions;

export default cardsSlice.reducer;
