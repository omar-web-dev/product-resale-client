import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Pages/Context/AuthProvide';


const SellerR = ({ur, children}) => {
    const { user, loading, userRole } = useContext(AuthContext);
    console.log(ur, user?.email)

    if (ur && user?.email) {
        return children;
    }
};

export default SellerR;