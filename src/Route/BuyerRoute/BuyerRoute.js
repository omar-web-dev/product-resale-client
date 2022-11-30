import { useContext} from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvide";
import useBuyer from "../../Hook/useBuyer";
import Spanner from "../../Pages/Spanner/Spainer";

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

