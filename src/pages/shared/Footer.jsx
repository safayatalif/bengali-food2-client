import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaLinkedinIn, FaFacebook, FaTwitter, FaVimeoV } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-hero h-full'>
            <h1 className='text-center text-indigo-300 pt-12 pb-6 text-7xl font-extrabold'>BENGALI FOOD </h1>
            <div className='flex gap-5 justify-center text-xl text-indigo-100'>
                <Link className='hover:text-indigo-300' to="/">Home</Link>
                <Link className='hover:text-indigo-300' to="/blog">Blog</Link>
                <Link className='hover:text-indigo-300' to="#about">About Us</Link>
                <Link className='hover:text-indigo-300' to="#contact">Contact</Link>
            </div>
            <div className='flex gap-5 justify-center text-xl text-indigo-100 py-6'>
                <Link className='p-4 rounded-full hover:text-indigo-300'><FaLinkedinIn></FaLinkedinIn></Link>
                <Link className='p-4 rounded-full hover:text-indigo-300'><FaFacebook></FaFacebook></Link>
                <Link className='p-4 rounded-full hover:text-indigo-300'><FaTwitter></FaTwitter></Link>
                <Link className='p-4 rounded-full hover:text-indigo-300'><FaVimeoV></FaVimeoV></Link>
            </div>
            <p className='text-base text-center pb-4'>Copyright © 2023 - All right reserved</p>
        </div>
    );
};

export default Footer;