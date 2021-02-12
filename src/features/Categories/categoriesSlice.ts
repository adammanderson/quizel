import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    addCategories(_, action) {
      return action.payload;
    },
  },
});

export const { addCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
