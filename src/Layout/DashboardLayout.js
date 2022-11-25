import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import DashboardNavbar from '../Pages/SharedPages/DashboardNavbar';

const DashboardLayout = () => {
    return (
        <div>
          <DashboardNavbar/>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col bg-slate-200 p-20">
                    {/* <!-- Page content here --> */}
                    <Outlet/>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to={'/dashboard/my-product'} >My Product</Link></li>
                        <li><Link to={'/dashboard/add-product'} >Add Product</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;