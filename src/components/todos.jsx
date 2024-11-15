import { useReducer, useState } from "react";

function Todos() {
  const initTodos = [
    { title: "Hoc JS", id: 1 },
    { title: "Hoc CSS", id: 2 },
    { title: "Hoc HTML", id: 3 },
    { title: "Hoc React", id: 4 },
  ];
  //   let [todos, setTodos] = useState(initTodos);
  let [todos, dispatch] = useReducer(reducer, initTodos);
  function reducer(state, action) {
    switch (action.type) {
      case "Add":
        console.log("Add");
        return [...state, { id: 1212, title: "dfdf" }];
      // break;
      case "Edit":
        console.log("Edit");
        return [];
      case "Delete":
        console.log("Delete");
        return [];
      default:
        break;
    }
  }
  let [text, setText] = useState("");
  function handleAdd() {
    // setTodos([...todos, { id: 1212, title: text }]);
    dispatch({ type: "Add" });
  }

  let data = todos.map((item, index) => {
    return (
      <tr
        key={index}
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
      >
        <td className="px-6 py-4">{item.title}</td>
        <td className="px-6 py-4">
          <button
            onClick={() => {
              dispatch({ type: "Delete" });
            }}
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Delete
          </button>
          <button
            type="button"
            className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Edit
          </button>
        </td>
      </tr>
    );
  });
  return (
    <div className="todos">
      <h1>Todo Management</h1>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <input
            onChange={(e) => {
              setText(e.target.value);
            }}
            type="text"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          />
        </div>

        <button
          onClick={handleAdd}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>{data}</tbody>
        </table>
      </div>
    </div>
  );
}
export default Todos;
