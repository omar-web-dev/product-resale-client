import { useContext} from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvide";
import useSeller from "../../Hook/useSeller";
// import useAdmin from "../../Hook/useAdmin";
import Spanner from "../../Pages/Spanner/Spainer";

const SellerRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, sellerLoading] = useSeller(user?.email);

    if (loading || sellerLoading)  {
        return <Spanner></Spanner>
    }

    if (isSeller) {
        return children;
    }
    else{
        return <Navigate to="/"></Navigate>;
    }
};


export default SellerRoutes;