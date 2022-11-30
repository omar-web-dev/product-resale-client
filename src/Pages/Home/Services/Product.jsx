import React, { useState, useEffect } from 'react';
import PrivateRoute from '../../../Route/PrivetRoute/PrivetRoute';
import BookModel from '../../Componets/BookModel';
import Categorize from '../Category/Categorize';
import ProductCategoryCard from '../Category/ProductCategoryCard';

const Product = () => {
    let s
    const [toggle, setToggle] = useState(s === !s)
    const [booking, setBooking] = useState({})
    const [products, setProducts] = useState([])
    const [categorize, setCategorize] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/categorize`)
            .then(res => res.json())
            .then(data => setCategorize(data))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/product`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <section className='product-section px-[5%] mx-auto max-w-[1440px] lg:my-20'>
            <div className="mb-10">
                <div>
                    <h2 className="text-3xl mt-10 text-orange-500 md:text-4xl">Collection</h2>
                </div>
                <PrivateRoute>
                    <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 mt-5 justify-center text-xl md:text-2xl font-semibold text-center'>
                        {categorize.map(ct => <Categorize key={ct?._id} id={ct?._id} category={ct} />)}
                    </div>
                </PrivateRoute>
            </div>
            <div className="grid md:gap-7 gap-2">
                {products.map(pt =>
                    <ProductCategoryCard
                        setToggle={setToggle}
                        setBooking={setBooking}
                        id={pt._id}
                        key={pt._id}
                        product={pt}
                    />

                )}


                {/* <ProductCard key={pt?._id} id={pt?._id} product={pt} /> */}

            </div>
            <BookModel
                booking={booking}
                toggle={toggle}
                setToggle={setToggle}
            />
        </section>
    );
};

export default Product;