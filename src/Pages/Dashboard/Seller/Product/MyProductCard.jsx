import React, { useState } from 'react';
import { HiOutlineTrash } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';

const MyProductCard = ({ product, id, sl }) => {
    const { price, productTitle, city, state, productStatus } = product
    const location = city + ', ' + state;
    const [error, setError] = useState()
    const [status, setStatus] = useState('')
    // console.log(product)





    const handelProductStatus = (productId) => {
        console.log(productStatus, '|', productId)
        if (productStatus) {
            setStatus(productStatus => !productStatus)
        }


        fetch('http://localhost:5000/product-status', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.acknowledged) {
                    notify()
                }
                console.log(data)
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                setError(errorMessage)
            });

    }
    // onClick={()=> handleUpdateProduct(id)} 

    // const handleUpdateProduct = (data) => {
    //     const image = data.image[0];
    //     const formData = new FormData();
    //     formData.append('image', image);
    //     const url = `https://api.imgbb.com/1/upload?key=6a56f720ef5af169c2b3789d5fb3086f`
    //     fetch(url, {
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(res => res.json())
    //         .then(imgData => {
    //             if (imgData.success) {
    //                 setError('');
    //                 saveUser(
    //                     data.productTitle,
    //                     data.price,
    //                     data.oldPrice,
    //                     data.usedYear,
    //                     data.condition,
    //                     data.category,
    //                     {photo :  imgData?.data?.url }
    //                 );
                    

    //             }
    //         })

    // }

    // const saveUser = (productTitle, price, oldPrice, usedYear, condition, category,  productImage) => {
    //     const user = { productTitle, price, oldPrice, usedYear, condition, category, productImage, productStatus };
        
    //     fetch('http://localhost:5000/add-product', {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data?.acknowledged) {
    //                 notify()
    //             }
    //             console.log(data)
    //         }).catch((error) => {
    //             const errorMessage = error.message;
    //             console.log(errorMessage)
    //             setError(errorMessage)
    //         });


    // }





console.log(status)

const handelDeleteProduct = () => {
    const confirm = window.confirm('Are you sure delete this Product')
    if (confirm) {
        fetch(`http://localhost:5000/add-product/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data?.deletedCount > 0) {
                    notify()
                }
            })
    }
}

const notify = () => toast("Product deleted!");

return (
    <>
        <ToastContainer />
        <tr>
            <th>{sl + 1}</th>
            <td>{productTitle.length > 15 ? productTitle.slice(0, 15) + '...' : productTitle}</td>
            <td>{price}</td>
            <td><button className="btn bg-green-200 btn-sm text-green-700 border-none">Ads</button></td>
            <td><button onClick={() => handelProductStatus(id)} className={`${!productStatus ? "bg-red-200 text-red-700" : "bg-green-200 text-green-700"} btn  btn-sm  border-none`}>
                {productStatus ? "available" : "sold"}</button></td>
            <td>
                <FaRegEdit className='mx-auto cursor-pointer text-blue-200 w-8 h-8 bg-blue-500 p-2 rounded-full' />
            </td>
            <td >
                {/* href="#deleteModel" */}
                <button >
                    <HiOutlineTrash onClick={handelDeleteProduct} className='mx-auto cursor-pointer text-red-200 w-8 h-8 bg-red-500 p-2 rounded-full' />
                </button>
            </td>
        </tr>
    </>

);
};

export default MyProductCard;