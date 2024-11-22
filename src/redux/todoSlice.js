import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    loadTodo: (state, action) => {
      state.value = action.payload; // [{}]
    },

    addTodo: (state, action) => {
      state.value.push({ title: action.payload, id: 4 });
    },
    deleteTodo: (state) => {
      state.value = [];
    },
  },
});

export const reducer = todoSlice.reducer;
export const { addTodo, deleteTodo, loadTodo } = todoSlice.actions;
