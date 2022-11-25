import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import MyProductCard from './MyProductCard';

const MyProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/add-product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            {products.length === 0 ?
                <>
                    <h4 className="text-4xl">No product added</h4>
                    <Link to={'/dashboard/add-product'} className="btn btn-sm btn-success mt-5">Add Product</Link>
                </>
                :
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Name</th>
                                <th>price</th>
                                <th>location</th>
                                <th>Advertise</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((pt, i) => <MyProductCard key={pt._id} sl={i} product={pt} />)}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default MyProduct;