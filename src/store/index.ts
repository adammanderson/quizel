import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '@features/Game/gameSlice';
import categoriesReducer from '@features/Categories/categoriesSlice';
import roundsReducer from '@features/Rounds/roundsSlice';

export const rootReducer = combineReducers({
  game: gameReducer,
  rounds: roundsReducer,
  categories: categoriesReducer,
});

export default configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
