import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvide';
import OrdersTable from './OrdersTable';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/booking?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user])

    console.log(orders)

    return (
        <div>
            <div className="modal z-50"  id="deleteModel">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <a href='#' className="btn btn-error">Delete</a>
                    </div>
                </div>
            </div>
            {orders.length === 0 ?
                <>
                    <h4 className="text-4xl">No product added</h4>
                    <Link to={'/'} className="btn btn-sm btn-success mt-5">Book Now</Link>
                </>
                :
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <thead>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>price</th>
                                <th>location</th>
                                <th className='text-center'></th>
                            </tr>
                        </thead> */}
                        <tbody>
                            {orders.map((order) => <OrdersTable  key={order._id} id={order._id} order={order} />)}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default MyOrders;