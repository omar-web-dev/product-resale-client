import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';

const SellerCard = ({ sl, seller, id, refetch, notify }) => {
    const {name, userStatus, email} = seller
    
    const handelDeleteSeller = (deleteId) => {
        fetch(`http://localhost:5000/delete-user/${deleteId}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    notify()
                }
            })

    }
    return (
            <tr>
                <th>{sl + 1}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{userStatus}</td>
                <td>No</td>
                <td >
                    <a >
                        <HiOutlineTrash onClick={()=>handelDeleteSeller(id)} className='mx-auto cursor-pointer text-red-200 w-8 h-8 bg-red-500 p-2 rounded-full' />
                    </a>
                </td>
            </tr>
    );
};

export default SellerCard;