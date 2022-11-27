import React from 'react';
import { Link } from 'react-router-dom';

const Categorize = ({ category, id }) => {
    return (
        <div>
            <Link to={`/category/${category?.category}`}>
                <p className='text-xl  cursor-pointer hover:text-orange-500 md:px-3 text-center bg-slate-200 rounded-md py-2'>{category?.category}</p>
            </Link>


        </div>
    );
};

export default Categorize;