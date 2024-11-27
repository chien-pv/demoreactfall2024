import Item from "./item";
import TodoContext from "../../contexts/todoContext";
import { useSelector, useDispatch } from "react-redux";
import { callAPITodo } from "../../redux/thunkAction";
import { useEffect } from "react";
// import { useGetTodosQuery } from "../../redux/createAPITodo";

function PassTodo() {
  // let dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(callAPITodo());
  // }, []);

  // console.log(useGetTodosQuery);
  // let { data = [], error, isLoading } = useGetTodosQuery();
  // console.log(isLoading);
  // const todos = useSelector((state) => state.todos.value);
  let dataLoad = [].map((item, index) => {
    return <Item key={item.id} index={index} {...item} />;
  });
  return (
    <>
      <tbody>{dataLoad}</tbody>;
    </>
  );
}

export default PassTodo;
