
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import MyProduct from "../Pages/Dashboard/MyProduct/MyProduct";
import AddProduct from "../Pages/Dashboard/Product/AddProduct";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "login",
          element: <Login/>,
        },
        {
          path: "registration",
          element: <Registration/>,
        },
        
      ]
    },{
      path: "/dashboard",
      element: <DashboardLayout />,
      children : [
        {
          path : './dashboard',
          element : <MyProduct/>
        },
        {
          path : '/dashboard/my-product',
          element : <MyProduct/>
        },
        {
          path : '/dashboard/add-product',
          element : <AddProduct/>
        },
        
      ]
    }
  ]);
  export default router 