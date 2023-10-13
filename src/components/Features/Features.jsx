import React, { useEffect, useState } from 'react';
import Feature from '../Feature/Feature';
import './Features.css'

const Features = () => {
    const [features, setFeatures] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('jobs.json');
            const data = await res.json();
            setFeatures(data)
        }
        loadData();
    }, [])
    return (
        <div>
            <h1 className='features-job-title'>Featured Jobs</h1>
            <p className='features-job-description'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='features-container'>
                {
                    features.map(feature => <Feature
                        key={feature.id}
                        feature={feature}
                    ></Feature>)
                }
            </div>
            <div className='text-center'>
                <button className='btn-see-more'>See More</button>
            </div>


        </div>
    );
};

export default Features;