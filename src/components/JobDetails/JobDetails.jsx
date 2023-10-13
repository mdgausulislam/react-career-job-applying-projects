import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../utility/localstorage';

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);

    const handleApplyJob=()=>{
        saveJobApplication(idInt);
        toast('you have applied successfully')
    }
    return (
        <div className='job-all-details'>
            <h1 className='job-type'>Job Details</h1>

            <div className='job-type-container'>
                <div className='job-type-description-container'>
                    <p className='job-description'><span className='job-description-title'>Job Description:</span>{job.job_description}</p>

                    <p className='job-responsibility'><span className='job-responsibility-title'>Job Description:</span>{job.job_responsibility}</p>

                    <div>
                        <h5>Educational Requirements:</h5>
                        <p>{job.educational_requirements}</p>
                    </div>
                    <div>
                        <h5>Experiences:</h5>
                        <p>{job.experiences}</p>
                    </div>

                </div>
                <div className='job-details-container'>
                    <h4 className='job-details-info'>Job Details</h4>
                    <hr></hr>
                    <p className='salary-info'><span className='salary'>Salary:</span> {job.salary}</p>
                    <p className='salary-info'><span className='job-title'>Job Title:</span> {job.job_title}</p>
                    <hr />
                    <p className='salary-info'><span className='phone'>Phone:</span> {job.contact_information.phone}</p>
                    <p className='salary-info'><span className='email'>Email:</span> {job.contact_information.email}</p>
                    <p className='salary-info'><span className='address'>Address:</span> {job.contact_information.address}</p>
                    <button onClick={handleApplyJob} className='btn-apply-now'>Apply Now</button>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default JobDetails;