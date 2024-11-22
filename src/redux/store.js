import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./todoSlice";
import { todoApi } from "./createAPITodo";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});

export default store;
