import React from 'react';
import Datetime from 'react-datetime';


const ProductCard = ({ product, id }) => {
    
    const { productTitle, city, state, zip, oldPrice, price, usedYear, phone, name, productImage, currentDate } = product

    return (
        <>
            <div className="lg:max-w-[1000px] mx-auto card w-full md:p-10  bg-base-100 border rounded-none">
                <div className='mb-5'>
                    <h2 className="card-title">{productTitle}</h2>
                    <p>Posted on {currentDate}, <span>{city}</span> <span>{state}</span> <span>{zip}</span></p>
                </div>
                <div className='flex'>
                    <figure className='border rounded-md w-2/3 p-5 '>
                        <img className='w-full' src={productImage?.photo} alt={productTitle} />
                    </figure>
                    <div className="card-body pt-0">
                        <div className="card-actions">
                            <div className='grid gap-3'>
                                <p className='border p-3 rounded-md'>For sale by <strong> {name}</strong></p>
                                <p className='border p-3 rounded-md'>Phone {phone}</p>
                                <div className='border p-3 rounded-md'>
                                    <p className='semibold'><strong>For Safety </strong></p>
                                    <ol className='list-disc pl-5'>
                                        <li>Meet in a safe & public place</li>
                                        <li>Don’t pay in advance</li>
                                    </ol>
                                </div>
                                <div className='border p-3 rounded-md'>
                                    <p className='flex justify-between'><span>Resale price </span> <span>{oldPrice}</span></p>
                                    <p className='flex justify-between'><span>Original price </span> <span>{price}</span></p>
                                    <p className='flex justify-between'><span>Used Year </span> <span>{usedYear}</span></p>
                                </div>
                                <label htmlFor="my-modal-3" className="btn btn-primary">Book Know</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;