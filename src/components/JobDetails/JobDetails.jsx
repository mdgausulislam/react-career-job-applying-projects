import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css'

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);
    return (
        <div className='job-all-details'>
            <h1 className='job-type'>Job Details</h1>

            <div className='job-type-container'>
                <div className='job-type-description-container'>
                    <p className='job-description'><span className='job-description-title'>Job Description:</span>{job.job_description}</p>

                </div>
                <div className='job-details-container'>
                    <h1>oder details</h1>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;