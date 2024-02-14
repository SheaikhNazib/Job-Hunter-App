import React from 'react';
import locationLogo from '../../assets/icons/Location2.png'
import salaryLogo from '../../assets/icons/money.png'
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className='border-2 p-7 text-left w-3/4 rounded-md mx-auto'>

            <img className='h-7' src={logo} alt="" />
            <p className='font-bold mt-4'>{job_title}</p>
            <p className='opacity-80'>{company_name}</p>
            <p className='text-sm text-purple-500 border-2 border-purple-500 rounded-md
             w-fit py-1 px-2 mt-2 mb-2'>{remote_or_onsite}</p>

            <div className='flex'>
                <img src={locationLogo} alt="" />
                <p className='ms-2 me-4'>{location}</p>
                <img className='' src={salaryLogo} alt="" />
                <p className='ms-2 me-4'>{salary}</p>
            </div>

            <Link to={`/jobDetails/${id}`}><button className='bg-purple-500 text-white font-bold p-2 rounded-md mt-3'>View Details</button></Link>

        </div>
    );
};

export default Job;