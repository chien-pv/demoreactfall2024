import Item from "./item";
import TodoContext from "../../contexts/todoContext";
import { useSelector, useDispatch } from "react-redux";

function PassTodo() {
  const todos = useSelector((state) => state.todos.value);
  let data = todos.map((item, index) => {
    return <Item key={item.id} index={index} {...item} />;
  });
  return <tbody>{data}</tbody>;
}

export default PassTodo;
