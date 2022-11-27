import React from 'react';


const Slider = () => {

    return (
        <div className='max-w-[1440px] mx-auto -z-50'>
            <div className="carousel h-[70%] w-full bg-[gainsboro]">
                <div id="slide1" className="carousel-item relative w-full">
                <div className='md:flex w-full items-center'>
                        <div className='md:w-2/3 text-center md:text-left p-[10%]'>
                            <h1 className='text-orange-500 fond-bold text-xl md:text-2xl'>Up to 30% Offer!</h1>
                            <h1 className='text-4xl md:text-6xl mb-3 py-2'>Let's Home Happy</h1>
                            <button className="btn btn-sm py-2 bg-orange-500 border-0 outline-none text-white">view collection</button>
                        </div>
                        <div className='md:w-1/3 flex md:justify-start justify-center'>
                            <img src="https://demo.xpeedstudio.com/marketov2/furniture/wp-content/uploads/sites/11/2018/10/3-min-300x300.png" className="p-[10%]" alt='red' />
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                <div className='flex w-full items-center'>
                        <div className='md:w-2/3 p-[10%]'>
                            <h1 className='text-orange-500 fond-bold text-2xl'>Up to 30% Offer!</h1>
                            <h1 className='text-6xl py-2'>Let's Home Happy</h1>
                            <button className="btn bg-orange-500 border-0 outline-none text-white">view collection</button>
                        </div>
                        <div className='md:w-1/3  flex '>
                            <img src="https://demo.xpeedstudio.com/marketov2/furniture/wp-content/uploads/sites/11/2018/10/3-min-300x300.png" className="p-[10%]" alt='red' />
                        </div>
                    </div>
                    
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                <div className='flex w-full items-center'>
                        <div className='md:w-2/3 p-[10%]'>
                            <h1 className='text-orange-500 fond-bold text-2xl'>Up to 30% Offer!</h1>
                            <h1 className='text-6xl py-2'>Let's Home Happy</h1>
                            <button className="btn bg-orange-500 border-0 outline-none text-white">view collection</button>
                        </div>
                        <div className='md:w-1/3  flex '>
                            <img src="https://demo.xpeedstudio.com/marketov2/furniture/wp-content/uploads/sites/11/2018/10/3-min-300x300.png" className="p-[10%]" alt='red' />
                        </div>
                    </div>
                    
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className='flex w-full items-center'>
                        <div className='md:w-2/3 p-[10%]'>
                            <h1 className='text-orange-500 fond-bold text-2xl'>Up to 30% Offer!</h1>
                            <h1 className='text-6xl py-2'>Let's Home Happy</h1>
                            <button className="btn bg-orange-500 border-0 outline-none text-white">view collection</button>
                        </div>
                        <div className='md:w-1/3  flex '>
                            <img src="https://demo.xpeedstudio.com/marketov2/furniture/wp-content/uploads/sites/11/2018/10/3-min-300x300.png" className="p-[10%]" alt='red' />
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;