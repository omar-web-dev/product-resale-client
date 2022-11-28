import React from 'react';
import Get from './Get/Get';
import Product from './Services/Product';
// import Product from './Services/Product';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <>
         <Slider/>   
         <Get/>
         <Product/>
        </>
    );
};

export default Home;