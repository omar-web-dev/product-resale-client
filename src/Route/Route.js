
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import AddProduct from "../Pages/Dashboard/Product/AddProduct";
import MyProduct from "../Pages/Dashboard/Product/MyProduct";
import SellerRoutes from "./SellerRoute/SellerRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Registration />,
      },

    ]
  }, {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard/my-product',
        element: <SellerRoutes><MyProduct /></SellerRoutes>
      },
      {
        path: '/dashboard/add-product',
        element: <SellerRoutes><AddProduct /></SellerRoutes>
      },

    ]
  }
]);
export default router 