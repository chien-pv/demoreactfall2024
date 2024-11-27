import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from "./App.jsx";
import Root from "./Root.jsx";
import Content from "./components/content.jsx";
import Todos from "./components/todos.jsx";
import ProductDetail from "./components/pages/product_detail.jsx";
import Login from "./components/pages/login.jsx";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";

// import store from "./demoRedux.js";
import store from "./redux/store.js";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: "users",
        element: <Content />,
      },
      {
        path: "products",
        element: <Content />,
      },
      {
        path: "products/:id",
        element: <ProductDetail />,
      },
      {
        path: "todos",
        element: <Todos />,
      },
    ],
  },
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <h2>Home</h2>,
      },
      {
        path: "about",
        element: <h2> About Management</h2>,
      },
      {
        path: "contact",
        element: <h2>Product Management</h2>,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
