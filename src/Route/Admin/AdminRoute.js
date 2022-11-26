import React, { useContext, useState } from 'react';
import useAdmin from '../../Hook/useAdmin';
import { AuthContext } from '../../Pages/Context/AuthProvide';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
};


export default AdminRoute;