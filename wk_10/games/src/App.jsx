import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Game1 from "./pages/Game1";
import Game2 from "./pages/Game2";
import Game3 from "./pages/Game3";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/game1",
      element: <Game1 />,
    },
    {
      path: "/game2",
      element: <Game2 />,
    },
    {
      path: "/game3",
      element: <Game3 />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
