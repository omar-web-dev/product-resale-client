import React from 'react';

const MyProductCard = ({ product, sl }) => {
    const { city, price, productTitle } = product

    return (
        <tr>
            <th>{sl + 1}</th>
            <td>{productTitle.length > 15 ? productTitle.slice(0,15) + '...' : productTitle}</td>
            <td>{price}</td>
            <td>Category</td>
            <td>Add Know</td>
            <td>edit</td>
            <td>delete</td>
        </tr>
    );
};

export default MyProductCard;