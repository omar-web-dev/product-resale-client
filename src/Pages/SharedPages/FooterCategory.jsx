import React from 'react';
import { Link } from 'react-router-dom';

const FooterCategory = ({category}) => {
    return (
        <div>
            <Link to={`/category/${category?.category}`}>
                <p className='cursor-pointer hover:text-orange-500  py-2'>{category?.category}</p>
            </Link>
        </div>
    );
};

export default FooterCategory;