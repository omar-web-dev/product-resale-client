import React from 'react';
import { HiOutlineTrash } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";

const MyProductCard = ({ product,id, sl}) => {
    const {price, productTitle } = product
    const handelDeleteProduct = () => {
        const confirm = window.confirm('Are you sure delete this Product')
        if (confirm) {
            fetch(`http://localhost:5000/add-product/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.deletedCount > 0) {
                        console.log("product deleted")
                    }
                })
        }
    }

    return (
        <tr>
            <th>{sl + 1}</th>
            <td>{productTitle.length > 15 ? productTitle.slice(0, 15) + '...' : productTitle}</td>
            <td>{price}</td>
            <td>Category</td>
            <td>Add Know</td>
            <td>
                <FaRegEdit className='mx-auto cursor-pointer text-blue-200 w-8 h-8 bg-blue-500 p-2 rounded-full' />
            </td>
            <td >
            {/* href="#deleteModel" */}
                <a >
                    <HiOutlineTrash onClick={handelDeleteProduct} className='mx-auto cursor-pointer text-red-200 w-8 h-8 bg-red-500 p-2 rounded-full' />
                </a>
            </td>
        </tr>
    );
};

export default MyProductCard;