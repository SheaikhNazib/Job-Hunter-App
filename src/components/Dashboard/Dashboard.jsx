import React, { useEffect, useState } from 'react';
import HeroImg from '../../assets/images/user.png'
import './Dashboard.css'
import Category from '../Category/Category';
import Job from '../Job/Job';

const Dashboard = () => {

    const [categories, setCategories] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])



    return (
        <div>
            {/* ---------------------------------- Hero section ------------------------------------- */}

            <div className='bg-purple-50'>
                <div className='sm:flex sm:px-48'>
                    <div className='my-auto'>
                        <h1 className='font-bold text-5xl mb-5'>One Step Closer To Your <span className='text-purple-500'>Dream Job</span></h1>

                        <p className='mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, ratione libero necessitatibus repudiandae cum numquam.</p>

                        <button className='bg-purple-500 text-white font-bold p-3 rounded-md'>Get Started</button>
                    </div>

                    <img className='hero-img' src={HeroImg} alt="" />
                </div>
            </div>


            {/* ----------------------------------- category list section ---------------------------------- */}

            <div className='px-48 mt-28 text-center'>
                <h2 className='text-4xl font-bold'>Job Category List</h2>
                <p className='mt-4 opacity-80'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='flex justify-center gap-6 mt-6'>
                    {
                        categories.map(category => <Category key={category.id} category={category}> </Category>)
                    }
                </div>
            </div>


            {/* ------------------------------------- Featured Job----------------------------------------- */}

            <div className='px-48 mt-28 text-center'>
                <h2 className='text-4xl font-bold'>Featured Jobs</h2>
                <p className='mt-4 opacity-80'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid grid-cols-2 gap-4 mt-8 '>
                    {
                        jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                    }
                </div>
                
                <div onClick={() => setDataLength(jobs.length)} className={dataLength === jobs.length && 'hidden'}>
                    <button className='bg-purple-500 text-white font-bold p-3 rounded-md mt-10'>See all jobs</button>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;