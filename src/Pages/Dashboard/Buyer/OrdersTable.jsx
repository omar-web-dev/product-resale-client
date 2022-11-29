import React from 'react';

const OrdersTable = ({order,sl,  id}) => {
    const pay = () => {
        <div className='absolute'>
            {alert('pay coming son....')}
        </div>
    }

    const {productPrice, productName, } = order
    return (
        <tr>
            <th>{sl + 1}</th>
            <td>{"image loading..."}</td>
            <td>{productName.length < 1? 'NO TITLE ' :  productName.length > 15 ? productName.slice(0, 15) + '...' : productName}</td>
            <td>{productPrice.length < 1? 'NO PRICE ' : productPrice}</td>
            <td><button onClick={pay} className='btn btn-primary btn-sm '>pay</button></td>
        </tr>
    );
};

export default OrdersTable;