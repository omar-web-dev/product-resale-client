import { useContext, useEffect, useState } from "react";
import { Navigate  } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvide";
import useAdmin from "../../Hook/useAdmin";
import Spanner from "../../Pages/Spanner/Spainer";

const AdminRoute = ({ children }) => {
    const [realUser, setRealUser] = useState()
    const { user, loading } = useContext(AuthContext);

    const [isAdmin, isSeller, isBuyer] = useAdmin(realUser);
    
    
    useEffect(() => {
        fetch(`http://localhost:5000/users-email?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setRealUser(data[0]))
    }, [user?.email])

    console.log(isAdmin, isSeller, isBuyer)
    if (loading) {
        return <Spanner></Spanner>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/"></Navigate>;
};


export default AdminRoute;