import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddCraft from "../Pages/AddCraft/AddCraft";
import MyCrafts from "../Pages/MyCrafts/MyCrafts";
import AllCrafts from "../Pages/AllCrafts/AllCrafts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/all-items",
        element: <AllCrafts></AllCrafts>,
        loader: () => fetch("http://localhost:5000/items"),
      },
      {
        path: "/add-item",
        element: <AddCraft></AddCraft>,
      },
      {
        path: "/my-items",
        element: <MyCrafts></MyCrafts>,
      },
    ],
  },
]);

export default router;
