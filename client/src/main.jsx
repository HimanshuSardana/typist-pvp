import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Test from "./routes/Test.jsx";
import LobbyPage from "./components/LobbyPage.jsx";

const router = createBrowserRouter([
  {
    path: "/lobby/:lobbyCode",
    element: <Test />,
  },
  {
    path: "/",
    element: <Navigate to="/lobby" />,
  },
  {
    path: "/lobby",
    element: <LobbyPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
