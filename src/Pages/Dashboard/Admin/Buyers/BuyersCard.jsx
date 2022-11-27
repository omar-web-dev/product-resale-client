import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';

const BuyersCard = ({ sl, buyer }) => {
    const { name, userStatus, email } = buyer
    return (
        <tr>
            <th>{sl + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{userStatus}</td>
            <td >
                <a >
                    <HiOutlineTrash className='mx-auto cursor-pointer text-red-200 w-8 h-8 bg-red-500 p-2 rounded-full' />
                </a>
            </td>
        </tr>
    );
};

export default BuyersCard;