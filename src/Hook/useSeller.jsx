import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvide';

const useSeller = (seller) => {
    // const {user} = useContext(AuthContext)
    const [isBuyer, setIsBuyer] = useState(false);
    
    console.log(seller)
    const [sellerLoading, setSellerLoading ] = useState(true)
    useEffect(() => {
            // if(seller?.userStatus === 'seller'){
            //     setIsBuyer(true)
            // }
            if(seller){
                fetch(`http://localhost:5000/users/seller?email=${seller}`)
                .then(res => res.json())
                .then(data => {
                    setIsBuyer(data.isSeller)
                    setSellerLoading(false)
                })
            }
            
    }, [seller])
    console.log(isBuyer)
    return [isBuyer , sellerLoading]
};

export default useSeller;