import React from 'react';
import image from '../../assets/banner-image.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div>
                <h1 className='banner-title'>One Step <br/> Closer To Your <span className='dream-job'>Dream Job</span></h1>
                <p className='banner-description'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p> 
                <button className='btn-get-start'>Get Started</button>
            </div>
            <img src={image} alt="" />
        </div>
    );
};

export default Banner;