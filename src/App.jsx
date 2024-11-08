import "./App.css";
import Content from "./components/content";
import Sidebar from "./layouts/sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
