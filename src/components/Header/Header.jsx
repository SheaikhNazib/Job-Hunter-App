import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='sm:flex sm:justify-around items-center pt-5 px-8 sm:mx-auto bg-purple-50'>
            <Link to='/'>
                <h2 className='text-2xl font-bold'>JobHunter</h2>
            </Link>

            <div className='sm:flex-col pages'>
                <Link to='/statistics'>
                    <button className='hover:text-purple-700'>Statistics</button>
                </Link>
                <Link to='/appliedJobs'>
                    <button className='hover:text-purple-700'>Applied Job</button>
                </Link>
                <button className='hover:text-purple-700'>Blog</button>
            </div>

            <button className='bg-purple-500 text-white font-bold p-3 rounded-md'>Start Applying</button>
        </nav>
    );
};

export default Header;