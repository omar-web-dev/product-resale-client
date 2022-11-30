import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Spanner from '../../../Spanner/Spainer';
import SellerCard from './SellerCard';

const Sellers = () => {

    const notify = () => toast("Deleted!");
    const { data: seller, isLoading, refetch } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            try {
                const res = await fetch('https://apens-home.vercel.app/rule?userStatus=seller', {

                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });

    
    if(isLoading){
        return <Spanner/>
    }

    return (

            <div>
                <ToastContainer />
                {seller.length === 0 ?
                    <>
                        <h4 className="text-4xl">Have no Seller</h4>
                    </>
                    :
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Report</th>
                                    <th className='text-center'>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {seller.map((seller, i) => 
                                <SellerCard key={i} 
                                id={seller._id} 
                                sl={i} 
                                seller={seller} 
                                refetch={refetch}
                                notify={notify}
                                />)}
                            </tbody>
                        </table>
                    </div>
                }
            </div>
    );
};

export default Sellers;