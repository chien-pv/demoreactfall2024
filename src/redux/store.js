import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./todoSlice";

const store = configureStore({
  reducer: {
    todos: reducer,
  },
});
export default store;
