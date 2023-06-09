import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Rule from "./pages/Rule";
import Game from "./pages/Game";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const browserRouter = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/rule", element: <Rule /> },
  { path: "/game/:difficulty", element: <Game /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={browserRouter} />
  </React.StrictMode>
);
