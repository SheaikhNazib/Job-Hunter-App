import React from 'react';
import bg1 from '../../assets/images/bg1.png'
import bg2 from '../../assets/images/bg2.png'
import { useLoaderData, useParams } from 'react-router-dom';
import money from '../../assets/icons/money.png'
import title from '../../assets/icons/calendar.png'
import phone from '../../assets/icons/phone.png'
import email from '../../assets/icons/email.png'
import location from '../../assets/icons/location2.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../Utility/LocalStorage';



const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);

    const handleAppliedJob = () => {
        saveJobApplication(idInt);
        toast("You have applied for this job");
    }


    return (
        <>
            <div className='bg-purple-50'>
                <img className='float-right -mt-20 -me-8' src={bg2} alt="" />
                <h3 className='text-3xl text-center font-bold pt-36'>Job Details</h3>
                <img className='-ms-10' src={bg1} alt="" />
            </div>


            <div className='mt-24 mx-60 flex gap-10'>

                {/* --------------------------- Job Descriptions ------------------------------  */}

                <div>
                    <p className='opacity-70'><span className='font-bold'>Job Description: </span>{job.job_description}</p>
                    <p className='opacity-70 my-5'><span className='font-bold'>Job Responsibility: </span>{job.job_responsibility}</p>
                    <p className='opacity-70'><span className='font-bold'>Educational Requirements: </span>
                        <p className='my-4'>
                            {job.educational_requirements}
                        </p>
                    </p>
                    <p className='opacity-70'><span className='font-bold'>Experience: </span>
                        <p className='my-4'>
                            {job.experiences}
                        </p>
                    </p>
                </div>

                {/* --------------------------- Job Details Card ------------------------------  */}

                <div>
                    <div className='border w-72 bg-purple-50 p-4 rounded-md'>
                        <h2 className='font-bold'>Job Details</h2>

                        <hr className='my-3' />

                        <div className='flex items-center'>
                            <img className='h-6 w-6' src={money} alt="" />
                            <p className='opacity-70 ms-1'>
                                <span className='font-bold'> Salary: </span>
                                {job.salary} (Per Month)
                            </p>
                        </div>
                        <div className='flex mt-2 mb-4'>
                            <img className='h-6 w-6' src={title} alt="" />
                            <p className='opacity-70 ms-1'>
                                <span className='font-bold'>Job Title: </span>
                                {job.job_title}
                            </p>
                        </div>

                        <h2 className='font-bold'>Contact Information:</h2>

                        <hr className='my-3' />

                        <div className='flex'>
                            <img className='h-6 w-6 me-1' src={phone} alt="" />
                            <p className='opacity-70'>
                                <span className='font-bold'>Phone: </span>
                                {job.contact_information.phone}
                            </p>
                        </div>
                        <div className='flex my-2'>
                            <img className='h-6 w-6 me-1' src={email} alt="" />
                            <p className='opacity-70'>
                                <span className='font-bold'>Email: </span>
                                {job.contact_information.email}
                            </p>
                        </div>
                        <div className='flex'>
                            <img className='h-6 w-6' src={location} alt="" />
                            <p className='opacity-70'><span className='font-bold'>Address: </span>{job.contact_information.address}</p>
                        </div>
                    </div>

                    <button onClick={handleAppliedJob} className='bg-purple-400 text-white font-bold w-72 mt-4 py-3 px-11 rounded-md'>Apply Now</button>
                </div>
                <ToastContainer />
            </div>

        </>
    );
};

export default JobDetails;