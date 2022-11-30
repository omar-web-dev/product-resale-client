import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import 'react-toastify/dist/ReactToastify.css';


const BuyersCard = ({sl, buyer, id, refetch ,notify}) => {
    const { name, userStatus, email } = buyer
    const ids = () => {
        fetch(`https://apens-home.vercel.app/delete-user/${id}`, {
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
            <td>
                <p onClick={() => ids(id)}>
                    <HiOutlineTrash className='mx-auto cursor-pointer text-red-200 w-8 h-8 bg-red-500 p-2 rounded-full' />
                </p>
            </td>
        </tr>
    );
};

export default BuyersCard;