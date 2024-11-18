import Item from "./item";
import TodoContext from "../../contexts/todoContext";
import { useContext } from "react";

function PassTodo() {
  const contextValue = useContext(TodoContext);
  let data = contextValue.todos.map((item, index) => {
    return <Item key={item.id} index={index} {...item} />;
  });
  return <tbody>{data}</tbody>;
}

export default PassTodo;
