import { useContext, useEffect, useState } from "react";
import useAdmin from "../../Hook/useAdmin";
import { AuthContext } from "../../Pages/Context/AuthProvide";

const BuyerRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [realUser, setRealUser] = useState()
    const [isBuyer] = useAdmin(realUser);

    useEffect(() => {
        // fetch(`http://localhost:5000/users/admin/:email=${user?.email}`)
        // fetch(`http://localhost:5000/users/buyer/email?email=${user?.email}`)
        fetch(`http://localhost:5000/users-email?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setRealUser(data[0]))
    }, [user?.email])

    if (isBuyer) {
        return children
    }
};


export default BuyerRoute;