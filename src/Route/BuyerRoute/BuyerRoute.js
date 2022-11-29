import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvide";
import useBuyer from "../../Hook/useBuyer";
// import useAdmin from "../../Hook/useAdmin";
import Spanner from "../../Pages/Spanner/Spainer";
// import useAdmin from "../../Hook/useAdmin";
// import { AuthContext } from "../../Pages/Context/AuthProvide";

const BuyerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isBuyer, sellerLoading] = useBuyer(user?.email);

    if (loading || sellerLoading)  {
        return <Spanner></Spanner>
    }

    if (isBuyer && user) {
        return children;
    }
    else{
        return <Navigate to="/"></Navigate>;
    }
};

export default BuyerRoute;



// // import { useContext, useEffect, useState } from "react";
// // import { Navigate } from "react-router-dom";
// // import { AuthContext } from "../../Context/AuthProvide";
// // import useBuyer from "../../Hook/useBuyer";
// // // import useAdmin from "../../Hook/useAdmin";
// // import Spanner from "../../Pages/Spanner/Spainer";
// // // import useAdmin from "../../Hook/useAdmin";
// // // import { AuthContext } from "../../Pages/Context/AuthProvide";

// // const BuyerRoute = ({ children }) => {
// //     const { user, loading } = useContext(AuthContext);
    
// //     const [buyer, setBuyer] = useState()
// //     // const [isBuyer] = useBuyer(buyer);
// //     let  isBuyer = true
// //     useEffect(() => {
        
// //         fetch(`http://localhost:5000/users-email?email=${user?.email}`)
// //         .then(res => res.json())
// //         .then(data => setBuyer(data[0]))
// //     }, [user])
    
    
// //     console.log(buyer, 'hh')
    
// //     if (loading) {
// //         return <Spanner></Spanner>
// //     }

// //     if (isBuyer && user) {
// //         return children;
// //     }
// //     else{
// //         return <Navigate to="/"></Navigate>;
// //     }
// // };

// // export default BuyerRoute;