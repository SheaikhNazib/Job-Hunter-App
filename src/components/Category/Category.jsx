import React from 'react';

const Category = ({ category }) => {
    const { logo, category_name, availability } = category;
    return (
        <div className='bg-purple-50 p-6'>
            <img src={logo} alt="" />
            <p className='mt-4 mb-2 font-bold '>{category_name}</p>
            <p className=''>{availability}</p>
        </div>
    );
};

export default Category;