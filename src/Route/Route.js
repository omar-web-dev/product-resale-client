
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import AddProduct from "../Pages/Dashboard/Product/AddProduct";
import MyProduct from "../Pages/Dashboard/Product/MyProduct";
import SellerRoutes from "./SellerRoute/SellerRoutes";
import Buyers from "../Pages/Dashboard/Admin/Buyers/Buyers";
import AdminRoute from "./Admin/AdminRoute";
import Sellers from "../Pages/Dashboard/Admin/Sellers";
import BuyerRoute from "./Buyer/BuyerRoute";
import Orders from "../Pages/Dashboard/Admin/Buyers/Orders";
import ProductCategory from "../Pages/Home/Category/ProductCategory";

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
        path: "Home",
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
      {
        path: "category/:category",
        loader : ({params}) => fetch(`http://localhost:5000/product/category?category=${params.category}`),
        element: <ProductCategory />,
      },

    ]
  }, {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard/my-product',
        element: <MyProduct />
      },
      {
        path: '/dashboard/add-product',
        element: <AddProduct />
      },
      {
        path: '/dashboard/my-orders',
        element: <Orders />
      },
      {
        path: '/dashboard/buyers',
        element: <AdminRoute><Buyers /></AdminRoute>
      },
      {
        path: '/dashboard/sellers',
        element: <AdminRoute><Sellers /></AdminRoute>
      },

    ]
  }
]);
export default router 