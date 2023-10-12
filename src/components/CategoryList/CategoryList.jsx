import React, { useEffect, useState } from 'react';
import Category from '../Categoty/Category';
import './CategoryList.css'

const CategoryList = () => {
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategoryList(data));
    }, [])

    return (
        <div>
            <h1 className='category-list-title'>Job Category List</h1>
            <p className='category-list-description'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='category-container'>
                {
                    categoryList.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default CategoryList;