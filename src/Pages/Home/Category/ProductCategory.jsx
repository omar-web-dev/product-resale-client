import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookModel from '../../Componets/BookModel';
import ProductCategoryCard from './ProductCategoryCard';

const ProductCategory = () => {
    let s
    const [toggle, setToggle] = useState(s===!s)
    const products = useLoaderData()
    // console.log(products)
    const [booking,setBooking] = useState({})
    return (
        <>
            <div>

                {products.map(pt => <ProductCategoryCard setToggle={setToggle} setBooking={setBooking} id={pt._id} key={pt._id} product={pt} />)}
            </div>
            <BookModel booking={booking} toggle={toggle} setToggle={setToggle}/>
        </>
    );
};

export default ProductCategory;