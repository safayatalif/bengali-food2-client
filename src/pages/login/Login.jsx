import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='bangraoud-color py-12'>
            <h1 className="text-5xl font-bold text-center text-indigo-200 pb-6">Please Login!</h1>
            <div className="card-body w-1/3 mx-auto bg-hero rounded-lg py-12">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text  text-indigo-200">Email</span>
                    </label>
                    <input name='email' type="text" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-indigo-200">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                    <label className=''>
                        <Link href="#" className="text-indigo-200 link">Forgot password?</Link>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="my-btn">Login</button>
                </div>
                <div className="form-control mt-6">
                    <button className="my-btn"><FaGoogle className='inline-block h-6 w-6 text-indigo-300'></FaGoogle> continue with Google</button>
                </div>
                <div className="form-control mt-6">
                    <button className="my-btn"><FaGithub className='inline-block h-6 w-6 text-indigo-300'></FaGithub> continue with github</button>
                </div>
                <label className="">
                    <span className='text-indigo-200'>Don&apos;t Have An Account ? <Link to='/register' className=" link text-indigo-200">Register</Link></span>
                </label>

            </div>
        </div>
    );
};

export default Login;