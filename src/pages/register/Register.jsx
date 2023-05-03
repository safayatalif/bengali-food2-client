import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='bangraoud-color py-12'>
                        <h1 className="text-5xl font-bold text-center text-indigo-200 pb-6">Please Sing In!</h1>
            <div className="card-body w-1/3 mx-auto bg-hero rounded-lg py-12">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text  text-indigo-200">Name</span>
                    </label>
                    <input name='name' type="text" placeholder="Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text  text-indigo-200">Photo URL</span>
                    </label>
                    <input name='photoURL' type="text" placeholder="Photo URL" className="input input-bordered" />
                </div>
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
                </div>
                <div className="form-control mt-6">
                    <button className="my-btn">Register</button>
                </div>
                <label className="">
                    <span className='text-indigo-200'>Already Have An Account ? <Link to='/login' className=" link text-indigo-200">Login</Link></span>
                </label>
            </div>
        </div>
    );
};

export default Register;