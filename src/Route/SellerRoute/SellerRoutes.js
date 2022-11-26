import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Pages/Context/AuthProvide';
import SellerR from './SellerR';

const SellerRoutes = ({ children }) => {
    const { user, loading, userRole } = useContext(AuthContext);

    // console.log(userRole)


    // console.log(userRole)
    // const {userRole} = useContext(AuthContext)

    // const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    // const location = useLocation();

    // if (loading || isAdminLoading) {
    //     return <Loading></Loading>
    // }


    // if (userRoles) {
    //     return children;
    // }


    // return <Navigate to="/login" state={{ from: location }} replace></Navigate>;

    return (
        userRole.map(ur => <SellerR children={children} ur={ur} key={ur._id} />)
    )
};


export default SellerRoutes;