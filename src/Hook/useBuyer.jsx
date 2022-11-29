import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvide";

const useBuyer = buyer => {
    // const {user} = useContext(AuthContext)
    const [isBuyer, setIsBuyer] = useState(false);
    
    console.log(buyer)
    const [sellerLoading, setSellerLoading ] = useState(true)
    useEffect(() => {
            if(buyer){
                fetch(`http://localhost:5000/users/buyer?email=${buyer}`)
                .then(res => res.json())
                .then(data => {
                    setIsBuyer(data.isBuyer)
                    setSellerLoading(false)
                })
            }
            
    }, [buyer])
    console.log(isBuyer)
    return [isBuyer , sellerLoading]
}

export default useBuyer;