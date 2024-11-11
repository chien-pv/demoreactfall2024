import "./App.css";
import { Outlet } from "react-router-dom";
import Content from "./components/content";
import Sidebar from "./layouts/sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
