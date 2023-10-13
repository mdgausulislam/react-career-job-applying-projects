import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const jobDetails=useLoaderData()
    return (
        <div>
            <h1>Hemonto job details:{jobDetails.length}</h1> 
        </div>
    );
};

export default JobDetails;