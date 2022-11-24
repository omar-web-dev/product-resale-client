import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navItems =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>service</Link></li>
            <li><Link to='/'>Contact Us</Link></li>
        </>
    return (
        <div className="mx-auto max-w-[1440px] py-5 px-[3%]">
            <div className=" bg-base-100">
                <div className="navbar justify-between md:hidden">
                    {/* mobile */}
                    <Link to='/' className="flex normal-case text-2xl font-bold items-center">
                        <img className='w-12' src="https://i.ibb.co/94BJMdM/logo.png" alt="" />
                        <p className='w-84'>Aspen Home</p>
                    </Link>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact right-10 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black text-4xl">
                            {navItems}
                        </ul>
                    </div>
                </div>
                {/* desktop   */}
                <div className='hidden md:flex justify-between'>
                    <Link to='/' className="flex normal-case text-2xl font-bold items-center">
                        <img className='w-12' src="https://i.ibb.co/94BJMdM/logo.png" alt="" />
                        <p className='w-96 flex-initial'>Aspen Home</p>
                    </Link>
                    <div className="navbar-end hidden md:w-full md:flex">
                        <ul className="menu menu-horizontal p-0 text-black text-lg">
                            {navItems}
                        </ul>

                    </div>
                        <Link to='login' className="btn text-white  border-0 bg-orange-500">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;