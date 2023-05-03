import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {
    const { googleSignIn, githubSignIn, signIn } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handelLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                console.log('done')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='bangraoud-color py-12'>
            <h1 className="text-5xl font-bold text-center text-indigo-200 pb-6">Please Login!</h1>
            <form onSubmit={handelLogIn} className="card-body w-1/3 mx-auto bg-hero rounded-lg py-12">
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
                    <button onClick={handleGoogleSignIn} className="my-btn"><FaGoogle className='inline-block h-6 w-6 text-indigo-300'></FaGoogle> continue with Google</button>
                </div>
                <div className="form-control mt-6">
                    <button onClick={handleGithubSignIn} className="my-btn"><FaGithub className='inline-block h-6 w-6 text-indigo-300'></FaGithub> continue with github</button>
                </div>
                <label className="">
                    <span className='text-indigo-200'>Don&apos;t Have An Account ? <Link to='/register' className=" link text-indigo-200">Register</Link></span>
                </label>

            </form>
        </div>
    );
};

export default Login;