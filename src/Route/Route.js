import DashboardLayout from "../Layout/DashboardLayout";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import AddProduct from "../Pages/Dashboard/Seller/Product/AddProduct";
import MyProduct from "../Pages/Dashboard/Seller/Product/MyProduct";
import Buyers from "../Pages/Dashboard/Admin/Buyers/Buyers";
import AdminRoute from "./Admin/AdminRoute";
import ProductCategory from "../Pages/Home/Category/ProductCategory";
// import MyOrders from "../Pages/Dashboard/Buyer/MyOrders";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Sellers from "../Pages/Dashboard/Admin/Seller/Sellers";
import MyOrders from "../Pages/Dashboard/Buyer/MyOrders";
import Blog from "../Pages/Blog/Blog";

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
        path: "blog",
        element: <Blog />,
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
        element: <MyOrders />
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