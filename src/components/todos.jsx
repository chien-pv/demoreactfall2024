import { useReducer } from "react";
import List from "./todos/list";
import FormAdd from "./todos/formAdd";

function Todos() {
  return (
    <div className="todos">
      <h1>Todo Management</h1>
      <FormAdd />
      <List />
    </div>
  );
}
export default Todos;
