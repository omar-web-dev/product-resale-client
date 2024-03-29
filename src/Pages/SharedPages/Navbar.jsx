import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvide';
import useAdmin from '../../Hook/useAdmin';

const Navbar = () => {

    const { user, userSignOut } = useContext(AuthContext)
    const [toggle, setToggle] = useState(false)
    const [realUser, setRealUser] = useState()
    const [isAdmin, isSeller, isBuyer] = useAdmin(realUser);
    useEffect(() => {
        fetch(`https://apens-home.vercel.app/users-email?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setRealUser(data[0]))
    }, [user?.email])



    const handleSingOut = () => {
        userSignOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    const profileToggle = () => {
        setToggle(s => !s);
    }
    const navItems =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>service</Link></li>
            <li><Link to='/'>Contact Us</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            {!user?.uid ?
                <li><Link to='registration'>Registration</Link></li>
                :
                <>
                    {isAdmin ?
                        <li><Link to='../dashboard/buyers'>Dashboard</Link></li>
                        : (isBuyer) ?
                            <li><Link to='../dashboard/my-orders'>Dashboard</Link></li>
                            : isSeller &&
                            <li><Link to='../dashboard/my-product'>Dashboard</Link></li>
                    }
                </>
            }
        </>
    return (
        <div className="mx-auto max-w-[1440px] py-5 px-[3%] ">
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
                            <li>
                                {user?.uid ?
                                    <>

                                        <button onClick={handleSingOut} className=''  >Sign out</button>
                                    </>
                                    :
                                    <Link to='login' className="btn text-white  border-0 bg-orange-500">Login</Link>}
                            </li>
                        </ul>
                    </div>
                    <>
                        {user?.uid &&
                            <>
                                <div className="avatar " onClick={profileToggle}>
                                    <div className="w-10 mt-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user?.photoURL} alt='user' />
                                    </div>
                                </div>
                                <ul id='profile' className={`"absolute z-50 top-24 right-0 left-0 menu dropdown-content p-2 shadow bg-base-100 rounded-box w-full mt-4" 
                        ${toggle ? 'absolute' : "hidden"}`}>
                                    {user?.displayName &&
                                        <li className='z-50'><Link>{user?.displayName}</Link></li>
                                    }
                                    <li><Link>View Profile</Link></li>
                                    <li className='z-50'>
                                        <button onClick={handleSingOut} className=''  >Sign out</button>
                                    </li>
                                </ul>
                            </>}
                    </>
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
                    <div className='ml-4'>
                        {user?.uid ?
                            <div className='z-50'>
                                <div className="avatar " onClick={profileToggle}>
                                    <div className="w-10 mt-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user?.photoURL} alt='user' />
                                    </div>
                                </div>
                                <ul id='profile' className={`" absolute  top-20 right-20 menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4" 
                        ${toggle ? 'absolute z-50' : "hidden"}`}>
                                    {user?.displayName &&
                                        <li><Link>{user?.displayName}</Link></li>
                                    }
                                    <li><Link>View Profile</Link></li>
                                    <li>
                                        <button disabled> 
                                            <span>{
                                                isAdmin ? "Admin" :
                                                    isBuyer ? "User" :
                                                        isSeller && "Seller"
                                            }</span> 🔥
                                        </button>
                                        <button onClick={handleSingOut} className=''  >Sign out</button>
                                    </li>
                                </ul>
                            </div>
                            :
                            <Link to='login' className="btn text-white  border-0 bg-orange-500">Login</Link>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;