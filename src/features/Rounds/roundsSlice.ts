import { createSlice } from '@reduxjs/toolkit';
import type { IRound } from '@interfaces';

const roundsSlice = createSlice({
  name: 'rounds',
  initialState: [] as IRound[],
  reducers: {
    startRound(state, action) {
      state.push({ roundId: state.length + 1, ...action.payload, complete: false });
    },
    completeRound(state, action) {
      const round = state.find(({ roundId }) => roundId === action.payload);
      if (round) {
        round.complete = !round.complete;
      }
    },
  },
});

export const { startRound, completeRound } = roundsSlice.actions;

export default roundsSlice.reducer;
