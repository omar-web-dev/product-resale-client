import { useContext, useEffect, useState } from "react";
import useAdmin from "../../Hook/useAdmin";
import { AuthContext } from "../../Pages/Context/AuthProvide";

const AdminRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [realUser, setRealUser] = useState()
    const [isAdmin] = useAdmin(realUser);
    useEffect(() => {
        fetch(`http://localhost:5000/users-email?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setRealUser(data[0]))
    }, [user?.email])

    if (isAdmin) {
        return children
    }
};


export default AdminRoute;