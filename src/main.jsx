import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Root from "./Root.jsx";
import Content from "./components/content.jsx";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: "users",
        element: <h2>User Management</h2>,
      },
      {
        path: "products",
        element: <Content />,
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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
