import React, { useEffect, useState } from 'react';
import Feature from '../Feature/Feature';

const Features = () => {
    const [features,setFeatures]=useState([]);
    useEffect(()=>{
        const loadData=async()=>{
            const res=await fetch('jobs.json');
            const data=await res.json();
            setFeatures(data)
        }
        loadData();
    },[])
    return (
        <div>
            <h1>Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            {
                features.map(feature=><Feature
                key={feature.id}
                feature={feature}
                ></Feature>)
            }
        </div>
    );
};

export default Features;