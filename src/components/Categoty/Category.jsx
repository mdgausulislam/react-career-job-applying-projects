import React from 'react';
import './Category.css'

const Category = ({category}) => {
    const {id,logo,category_name,availability}=category;
    return (
        <div className='category1-container'>
            <img src={logo} alt="" />
            <h4>{category_name}</h4>
            <p>{availability}</p>
        </div>
    );
};

export default Category;