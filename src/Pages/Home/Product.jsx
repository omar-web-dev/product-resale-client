import React from 'react';

const Product = () => {

    return (
        <section className='product-section px-[5%] mx-auto max-w-[1440px] lg:my-20'>
            <div className="mb-10">
                <div>
                    <h2 className="text-3xl mt-10 text-orange-500 md:text-4xl">Collection</h2>
                </div>
                <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 mt-5 justify-center text-xl md:text-2xl font-semibold cursor-pointer hover:text-orange-500  text-center'>
                    <p className='text-xl hover:text-orange-500 md:px-3 text-center bg-slate-200 rounded-md py-2'>Living Room Furniture</p>
                    <p className='text-xl hover:text-orange-500 md:px-3 text-center bg-slate-200 rounded-md py-2'>Bedroom Furniture</p>
                    <p className='text-xl hover:text-orange-500 md:px-3 text-center bg-slate-200 rounded-md py-2'>Office Furniture</p>
                    <p className='text-xl hover:text-orange-500 md:px-3 text-center bg-slate-200 rounded-md py-2'>Bedroom Furniture</p>
                    <p className='text-xl hover:text-orange-500 md:px-3 text-center bg-slate-200 rounded-md py-2'>Children's Furniture</p>
                    <p className='text-xl hover:text-orange-500 md:px-3 text-center bg-slate-200 rounded-md py-2'>Doors</p>
                    <p className='text-xl hover:text-orange-500 md:px-3 text-center bg-slate-200 rounded-md py-2'>Household Items</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                    <figure className='p-5'>
                        <img className='w-full' src="https://demo.xpeedstudio.com/marketov2/furniture/wp-content/uploads/sites/11/2018/10/1-min-1-253x200-1.png" alt="Shoes" /></figure>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                    <figure className='p-5'>
                        <img className='w-full' src="https://demo.xpeedstudio.com/marketov2/furniture/wp-content/uploads/sites/11/2018/05/Untitled-3-1.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                    <figure className='p-5'>
                        <img className='w-full' src="https://demo.xpeedstudio.com/marketov2/furniture/wp-content/uploads/sites/11/2018/10/red_color_chair-1.png" alt="Shoes" /></figure>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                    <figure className='p-5'>
                        <img className='w-full' src="https://demo.xpeedstudio.com/marketov2/furniture/wp-content/uploads/sites/11/2018/10/4-min.png" alt="Shoes" /></figure>
                </div>
            </div>

        </section>
    );
};

export default Product;