import {useEffect, useState } from 'react';

const useSeller = (seller) => {
    const [isBuyer, setIsBuyer] = useState(false);
    
    const [sellerLoading, setSellerLoading ] = useState(true)
    useEffect(() => {
            if(seller){
                fetch(`https://apens-home.vercel.app/users/seller?email=${seller}`)
                .then(res => res.json())
                .then(data => {
                    setIsBuyer(data.isSeller)
                    setSellerLoading(false)
                })
            }
            
    }, [seller])
    return [isBuyer , sellerLoading]
};

export default useSeller;