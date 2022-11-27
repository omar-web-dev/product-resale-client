import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCategoryCard from './ProductCategoryCard';

const ProductCategory = () => {
    const products = useLoaderData()
    console.log(products)
    return (
        <div>
                {products.map(pt => <ProductCategoryCard key={pt._id} product={pt}/>)}
        </div>
    );
};

export default ProductCategory;