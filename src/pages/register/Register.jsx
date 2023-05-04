import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { FaExclamationTriangle } from 'react-icons/fa';

const Register = () => {
    const { createUser, setError, error, upDateProfile  , logOut} = useContext(AuthContext)
    const handleEmailSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        if (!/^.{6,}$/.test(password)) {
            return setError('password is less than 6 characters')
        }
        if (!password, !email) {
            return setError('cannot submit empty email and password')
        }
        else {
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    upDateProfile(name, photoURL, user)
                        .then((result2)=>{
                            const user = result2.userImpl;
                            setError('')
                        })
                        .catch(error2 => {
                            
                        })
                    setError('');
                    form.reset();
                    logOut()

                })
                .catch(error => {
                    setError(error.message)
                })
        }
    }
    return (
        <div className='bangraoud-color py-12'>
            <h1 className="text-5xl font-bold text-center text-indigo-200 pb-6">Please Register!</h1>
            <form onSubmit={handleEmailSignIn} className="card-body md:w-1/3 mx-auto bg-hero rounded-lg py-12">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text  text-indigo-200">Name</span>
                    </label>
                    <input name='name' required type="text" placeholder="Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text  text-indigo-200">Photo URL</span>
                    </label>
                    <input name='photoURL' required type="text" placeholder="Photo URL" className="input input-bordered" />
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
                    <input required type="password" name='password' placeholder="password" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="my-btn">Register</button>
                </div>
                <label className="">
                    <span className='text-indigo-200'>Already Have An Account ? <Link to='/login' className=" link text-indigo-200">Login</Link></span>
                </label>
                <label className="">
                    {
                        error && <span className='text-red-500'><FaExclamationTriangle className='inline-block'></FaExclamationTriangle> {error}</span>
                    }
                </label>
            </form>
        </div>
    );
};

export default Register;