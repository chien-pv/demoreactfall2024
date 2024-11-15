import "./App.css";
import { Outlet } from "react-router-dom";
import Content from "./components/content";
import Sidebar from "./layouts/sidebar";
import { useEffect, useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  let [text, setText] = useState("");

  useEffect(() => {
    console.log("call Api");
  });

  console.log("App");
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
      <div>
        <input
          className="border"
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="text"
        />
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Change
        </button>
      </div>
    </div>
  );
}

export default App;
