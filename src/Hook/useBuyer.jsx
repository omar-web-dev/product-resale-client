import { useEffect, useState } from "react";

const useBuyer = buyer => {
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
    return [isBuyer , sellerLoading]
}

export default useBuyer;