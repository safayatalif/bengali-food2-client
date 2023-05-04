import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { FaBars } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handelLogOut = () => {
        logOut()
            .then(() => {
                
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="navbar bg-gradient-to-r from-violet-500 to-indigo-500 shadow-md px-4 sticky top-0">
            <div className="flex-1">
                <a className="font-bold text-3xl text-indigo-200">Bengali<span className='underline text-orange-500 font-extrabold'>.Food</span></a>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end md:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        {
                            user ?
                                <div className="w-10 rounded-full">
                                    <img title={user?.displayName} src={user?.photoURL} />
                                </div>
                                :
                                <div className="w-10 p-3">
                                    <FaBars></FaBars>
                                </div>
                        }
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink className={({ isActive }) =>
                            isActive ? "text-indigo-300 underline" : "text-indigo-200"
                        }
                            to='/'>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                            isActive ? "text-indigo-300 underline my-3" : "my-3 text-indigo-200"
                        } to='/blog'>Blog</NavLink></li>
                        <li>
                            {
                                user ?
                                    <button onClick={handelLogOut} className="my-btn ml-4">
                                        LogOut
                                    </button>
                                    :
                                    <Link to='/login'>
                                        <button className="my-btn ml-4">
                                            Login
                                        </button>
                                    </Link>
                            }
                        </li>
                    </ul>
                </div>
                <div className='hidden md:flex items-center'>
                    <NavLink className={({ isActive }) =>
                        isActive ? "text-indigo-300 underline ml-5 text-xl font-bold" : "ml-5 text-xl font-semibold text-indigo-200"
                    } to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "text-indigo-300 underline ml-5 text-xl font-bold" : "ml-5 text-xl font-semibold text-indigo-200"
                    } to='/blog'>Blog</NavLink>
                    {
                        user ?
                            <button onClick={handelLogOut} className="my-btn ml-4">
                                LogOut
                            </button>
                            :
                            <Link to='/login'>
                                <button className="my-btn ml-4">
                                    Login
                                </button>
                            </Link>
                    }
                    {
                        user && <div className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img title={user?.displayName} src={user?.photoURL} />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;