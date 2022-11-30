import React from 'react';

const OrdersTable = ({ order, sl, id }) => {
    const pay = () => {
        <div className='absolute'>
            {alert('pay coming son....')}
        </div>
    }
    const unBooked = () => {
        <div className='absolute'>
            {alert('Un Booked coming son....')}
        </div>
    }

    const { productPrice, productName, productImage } = order
    return (
        <tr>
            <th>{sl + 1}</th>
            <td >
                <img className='h-14 w-14' src={productImage} alt={'lod'}/>
            </td>
            <td>{productName.length < 1 ? 'NO TITLE ' : productName.length > 15 ? productName.slice(0, 15) + '...' : productName}</td>
            <td  className='text-center'>{productPrice.length < 1 ? 'NO PRICE ' : productPrice}</td>
            <td  className='text-center'><button onClick={pay} className='btn btn-primary btn-sm '>pay</button></td>
            <td className='text-center'><button onClick={unBooked} className='btn btn-error btn-sm '>un booked</button></td>
        </tr>
    );
};

export default OrdersTable;