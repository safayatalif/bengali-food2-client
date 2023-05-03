import React from 'react';
import Lottie from "lottie-react";
import chefLottie from '../../../assets/chef-lottie.json'
import { FaPlay } from 'react-icons/fa';

const NavBanner = () => {
    return (
        <div className='bangraoud-color md:grid grid-cols-2 py-16'>
            <div className="md:pr-20 md:ml-20">
                <Lottie className='w-full h-96' animationData={chefLottie}></Lottie>
            </div>
            <div className="mx-8 md:mx-2 text-center flex-1 ">
                <h1 className='text-5xl font-bold text-indigo-200'>Changing <br />
                    <p className='my-3' >your <span className='text-orange-600 font-extrabold'>eating</span></p>
                    <p >habits</p>
                </h1>
                <p className='text-violet-200 mt-5'>Always take care of your health starting from <br /> the food menu that you consume every day</p>
                <button className="text-bold text-indigo-200 bg-orange-600 border px-4 py-2 rounded-md  mt-5 shadow-lg hover:bg-violet-500">
                    Learn More <FaPlay className='inline-block ml-4 h-8'></FaPlay>
                </button>
            </div>
        </div>
    );
};

export default NavBanner;