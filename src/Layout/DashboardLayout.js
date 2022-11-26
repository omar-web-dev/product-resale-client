import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../Hook/useAdmin';
import { AuthContext } from '../Pages/Context/AuthProvide';
import DashboardNavbar from '../Pages/SharedPages/DashboardNavbar';
import Footer from '../Pages/SharedPages/Footer';
import SellerRoutes from '../Route/SellerRoute/SellerRoutes';
import BuyerRoute from '../Route/Buyer/BuyerRoute';
import AdminRoute from '../Route/Admin/AdminRoute';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [realUser, setRealUser] = useState()
    const [isAdmin, isSeller, isBuyer] = useAdmin(realUser);
    console.log(isAdmin, isSeller, isBuyer)
    useEffect(()=>{
        fetch(`http://localhost:5000/users-email?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setRealUser(data[0]))
    },[user?.email])

    return (
        <div>
            <DashboardNavbar />
            <div>
                <div className="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col bg-slate-200 p-10">
                        {/* <!-- Page content here --> */}
                        <Outlet />
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    </div>

                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                            {
        <>
        {
            isAdmin &&
            <>
                <li><Link to={'/dashboard/my-product'} >ADMIN</Link></li>
                <li><Link to={'/dashboard/my-product'} >My Product</Link></li>
                <li><Link to={'/dashboard/add-product'} >Add Product</Link></li>
            </>
        }
        {isBuyer &&
            <>
                <li><Link to={'/dashboard/my-product'} >Buyer</Link></li>
                <li><Link to={'/dashboard/my-product'} >My Product</Link></li>
                <li><Link to={'/dashboard/add-product'} >Add Product</Link></li>
            </>
            }
            {
                isSeller && 
            <>
                <li><Link to={'/dashboard/my-product'} >Seller</Link></li>
                <li><Link to={'/dashboard/my-product'} >My Product</Link></li>
                <li><Link to={'/dashboard/add-product'} >Add Product</Link></li>
            </>
            }
        </>
                            }
                        </ul>

                    </div>
                </div>
            </div>

            {/* {userRole.map(ur => <DashBoard userRole={ur} key={ur._id}/> )} */}
            <Footer />
        </div>
    );
};

export default DashboardLayout;