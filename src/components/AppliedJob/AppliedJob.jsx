import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AppliedJob = () => {
    const job=useLoaderData();
    return (
        <div>
            <h1>Applied job:{job.length}</h1>
        </div>
    );
};

export default AppliedJob;