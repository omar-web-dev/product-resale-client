import React from 'react';

const ProductCategoryCard = ({ product }) => {
    const { productTitle, city, state, zip, oldPrice, price, usedYear } = product

    const booking = 
    [
        {
"user" : {"name" : "Buyer", "email" : "buyer@omar.com", "location" : "city, state"},
"seller" : {"name" : "Seller", "email" : "seller@omar.com", "location" : "city, state", "verified" : true},
"product" : {"productId" : "_id", "price" : "33"}
        }
    ]
    return (
        <>{/* The button to open modal */}
            

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
            <div className="max-w-[1000px] mx-auto card w-full p-10 bg-base-100 border rounded-none">
                <div className='mb-5'>
                    <h2 className="card-title">{productTitle}</h2>
                    <p>Posted on 27 Nov 10:59 am, <span>{city}</span> <span>{state}</span> <span>{zip}</span></p>
                </div>
                <div className='flex'>
                    <figure className='border rounded-md w-2/3 p-5 '>
                        <img className='w-full' src="https://demo.xpeedstudio.com/marketov2/furniture/wp-content/uploads/sites/11/2018/10/1-min-1-253x200-1.png" alt="Shoes" />
                    </figure>
                    <div className="card-body pt-0">

                        <div className="card-actions">
                            <div className='grid gap-3'>
                                <p className='border p-3 rounded-md'>For sale by <strong> MD Yousuf Hawladar</strong></p>
                                <p className='border p-3 rounded-md'>Phone {"018xxxxxx"}</p>
                                <div className='border p-3 rounded-md'>
                                    <p className='semibold'><strong>For Safety </strong></p>
                                    <ol className='list-disc pl-5'>
                                        <li>Meet in a safe & public place</li>
                                        <li>Don’t pay in advance</li>
                                    </ol>
                                </div>
                                <p >Resale price {oldPrice}</p>
                                <p>Original price{price}</p>
                                <p>Used {usedYear} Month</p>
                                <label htmlFor="my-modal-3" className="btn btn-primary">Book Know</label>
                                {/* <button className="btn btn-primary">Book Know</button> */}
                                <button className="btn btn-primary">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-3'>
                    <p className='text-xl '>Description</p>
                    ফোনটি খুবি ভালো আমি নতুন কিনছি,,
                    <br />
                    Ram 8+3 gb
                    <br />
                    Rom 128 gb
                    <br />
                    অরকিনাল চার্জার ও বক্স আাছে
                    <br />
                    টাকা দরকার তাই বিক্রি করে দিবো
                </div>
            </div>
        </>
    );
};

export default ProductCategoryCard;