import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    activeRound: 0,
    activeQuestion: 0,
  },
  reducers: {
    goToRound(state, action) {
      return { ...state, activeRound: action.payload };
    },
    goToQuestion(state, action) {
      return { ...state, activeQuestion: action.payload };
    },
  },
});

export const { goToRound, goToQuestion } = gameSlice.actions;

export default gameSlice.reducer;
