import React from 'react';
import Get from './Get/Get';
import Service from './Services/Service';
// import Product from './Services/Product';
import Slider from './Slider/Slider';

const Home = () => {
    
    return (
        <>
            <Slider />
            <Get />
            <Service />
        </>
    );
};

export default Home;