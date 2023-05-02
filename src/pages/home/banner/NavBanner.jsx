import React from 'react';
import Lottie from "lottie-react";
import chefLottie from '../../../assets/chef-lottie.json'

const NavBanner = () => {
    return (
        <div className='bg-gradient-to-r from-violet-500 to-indigo-500 md:flex py-16'>
            <div className="md:pr-40 md:ml-24">
                <Lottie className='md:w-96 w-full' animationData={chefLottie}></Lottie>
            </div>
            <div className="mx-8 md:mx-2 text-center flex-1 ">
                <h1 className='text-5xl font-bold text-indigo-200'>Changing <br />
                    <p className='my-3' >your <span className='text-orange-600'>eating</span></p>
                    <p >habits</p>
                </h1>
                <p className='text-violet-200 mt-5'>Always take care of your health starting from <br /> the food menu that you consume every day</p>
                <button className="text-bold text-indigo-200 bg-orange-600 border px-4 py-2 rounded-md  mt-5 shadow-lg hover:bg-violet-500">
                    Explore Chef
                </button>
            </div>
        </div>
    );
};

export default NavBanner;