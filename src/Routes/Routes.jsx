import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddCraft from "../Pages/AddCraft/AddCraft";
import MyCrafts from "../Pages/MyCrafts/MyCrafts";
import AllCrafts from "../Pages/AllCrafts/AllCrafts";
import CraftDetails from "../Components/CraftDetails/CraftDetails";
import PrivateRoutes from "./PrivateRoutes";
import UpdateCoffee from "../../../../express-js/coffee-store/coffee-store-client/src/Components/UpdateCoffee";
import UpdateCraft from "../Pages/UpdateCraft/UpdateCraft";
import SubCategories from "../Pages/SubCategories/SubCategories";

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
        element: (
          <PrivateRoutes>
            <AddCraft></AddCraft>
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-items",
        element: (
          <PrivateRoutes>
            <MyCrafts></MyCrafts>
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:5000/items"),
      },
      {
        path: "/item-details/:id",
        element: (
          <PrivateRoutes>
            <CraftDetails></CraftDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/items/${params.id}`),
      },
      {
        path: "/update-craft/:id",
        element: (
          <PrivateRoutes>
            <UpdateCraft></UpdateCraft>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/items/${params.id}`),
      },
      {
        path: "/subcategories/:id",
        element: <SubCategories></SubCategories>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/subcategories/${params.id}`),
      },
    ],
  },
]);

export default router;
