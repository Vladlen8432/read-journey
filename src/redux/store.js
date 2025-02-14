import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer";
import booksReducer from "./books/booksSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    books: booksReducer,
  },
});

export default store;
