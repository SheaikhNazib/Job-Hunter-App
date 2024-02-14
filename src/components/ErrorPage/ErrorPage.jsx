import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const ErrorPage = () => {

    const element = <FontAwesomeIcon icon={faBug} />

    return (
        <div className='flex flex-col justify-center items-center mt-60'>
            <h3 className='text-3xl font-bold'>OPPS!!! An error occur</h3>
            <FontAwesomeIcon className='h-64  my-10' icon={faBug} />
            <Link to='/'>
                <button className='text-white font-bold bg-slate-500 p-3 rounded-md hover:bg-slate-600'>Back to Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;