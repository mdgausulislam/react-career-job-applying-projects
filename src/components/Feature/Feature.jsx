import React from 'react';
import './Feature.css'

const Feature = ({ feature }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = feature
    return (
        <div className='feature-container'>
            <img src={logo} alt="" />
            <h4>{job_title}</h4>
            <p>{company_name}</p>
            <div className='btn-remote-type'>
                <button className='btn-remote'>{remote_or_onsite}</button>
                <button className='btn-remote'>{job_type}</button>
            </div>
            <div className='location'>
                <p>{location}</p>
                <p>{salary}</p>
            </div>

            <button className='btn-view-details'>View Details</button>
        </div>
    );
};

export default Feature;