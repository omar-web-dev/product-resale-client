import Navbar from '../Pages/SharedPages/Navbar';
import { Outlet } from "react-router-dom";
import Footer from "../Pages/SharedPages/Footer";

const Main = () => {
    return (
        <div>
          <Navbar/>
          <Outlet/>
          <Footer/>
        </div>
    );
};

export default Main;