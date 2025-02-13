import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      const bookExists = state.some((book) => book._id === action.payload._id);
      if (!bookExists) {
        state.push(action.payload);
      }
    },
    removeBook: (state, action) => {
      return state.filter((book) => book._id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
