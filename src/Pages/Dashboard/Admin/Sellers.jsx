import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SellerCard from './Seller/SellerCard';

const Sellers = () => {
    const [sellers, setSeller] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/rule?userStatus=seller`)
            .then(res => res.json())
            .then(data => setSeller(data))
    }, [])

    return (

            <div>
                <div className="modal z-50" id="deleteModel">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        <div className="modal-action">
                            <a href='#' className="btn btn-error">Delete</a>
                        </div>
                    </div>
                </div>
                {sellers.length === 0 ?
                    <>
                        <h4 className="text-4xl">No product added</h4>
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
                                {sellers.map((seller, i) => <SellerCard key={i} id={seller._id} sl={i} seller={seller} />)}
                            </tbody>
                        </table>
                    </div>
                }
            </div>
    );
};

export default Sellers;