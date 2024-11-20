import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: [
    { title: "Hoc JS ReduxToolkit", id: 1 },
    { title: "Hoc CSS", id: 2 },
    { title: "Hoc HTML", id: 3 },
    { title: "Hoc React", id: 4 },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.value.push({ title: action.payload, id: 4 });
    },
    deleteTodo: (state) => {
      state.value = [];
    },
  },
});

export const reducer = todoSlice.reducer;
export const { addTodo, deleteTodo } = todoSlice.actions;
