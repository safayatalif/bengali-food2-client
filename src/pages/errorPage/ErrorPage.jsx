import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorImage from '../../assets/images/error.jpg'

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div>
            <div className='w-1/3 h-96 mx-auto'>
                <img className='' src={errorImage} alt="" />
            </div>
            <div className='max-w-md text-center mx-auto'>
                <h2 className='mb-8 font-extrabold text-3xl text-yellow-500'>
                    <span className='sr-only'>Error</span>
                    {status || 404}
                </h2>
                <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
                    {error?.message}
                </p>
                <Link  to='/' className='my-btn'>
                    Back to homepage
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;