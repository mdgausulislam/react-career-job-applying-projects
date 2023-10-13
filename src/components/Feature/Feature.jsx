import React from 'react';
import './Feature.css'
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

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
                <p className='location title'> <span className='location-size'><MapPinIcon className='location-icon' /></span>{location}</p>
                <p className='location title'> <span className='location-size'><CurrencyDollarIcon className='location-icon' /></span>{location}</p>
            </div>
            <Link to={`/feature/${id}`}>
                <button className='btn-view-details'>View Details</button>
            </Link>

        </div>
    );
};

export default Feature;