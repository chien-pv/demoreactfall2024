import { loadTodo } from "./todoSlice";
import axios from "axios";
export function callAPITodo() {
  return async (dispatch) => {
    const response = await axios.get(
      "https://674015ded0b59228b7ee99eb.mockapi.io/todos"
    );
    console.log(response);
    dispatch(loadTodo(response.data));
  };
}
