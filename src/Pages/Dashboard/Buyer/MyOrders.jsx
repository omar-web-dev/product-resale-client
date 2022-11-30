import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvide';
import OrdersTable from './OrdersTable';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://apens-home.vercel.app/booking?userEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user])

    console.log(orders)

    return (
        <div>
            {orders.length === 0 ?
                <>
                    <h4 className="text-4xl">No product Booked</h4>
                    <Link to={'/'} className="btn btn-sm btn-success mt-5">Book Now</Link>
                </>
                :
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Image</th>
                                <th>Product Title</th>
                                <th className='text-center'>price</th>
                                <th className='text-center'>PAY</th>
                                <th  className='text-center'>delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, i) => <OrdersTable
                              key={order._id} 
                              id={order._id} 
                              order={order} 
                              sl={i}
                              />)}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default MyOrders;