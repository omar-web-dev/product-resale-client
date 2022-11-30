import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Spanner from '../../../Spanner/Spainer';
import SellerCard from './SellerCard';

const Sellers = () => {
    // const [seller, setSeller] = useState([])
    // useEffect(() => {
    //     fetch(`http://localhost:5000/rule?userStatus=seller`)
    //         .then(res => res.json())
    //         .then(data => setSeller(data))
    // }, [])

    const notify = () => toast("Deleted!");
    const { data: seller, isLoading, refetch } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/rule?userStatus=seller', {

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
                {/* <div className="modal z-50" id="deleteModel">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        <div className="modal-action">
                            <a href='#' className="btn btn-error">Delete</a>
                        </div>
                    </div>
                </div> */}
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