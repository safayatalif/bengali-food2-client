import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-gradient-to-r from-violet-500 to-indigo-500 shadow-md px-4">
            <div className="flex-1">
                <a className="font-bold text-3xl text-indigo-200">Bengali<span className='underline text-orange-500'>.Food</span></a>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end md:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://img.freepik.com/free-photo/portrait-smiling-chef-uniform_329181-675.jpg?w=900&t=st=1682988804~exp=1682989404~hmac=ff3235ab1c32078c20b47f91bfa627de8d18f4fa34477eaed59de54ad5b55a77" />
                        </div>
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
                            <button className="text-bold text-indigo-200 bg-orange-600 border px-4 py-2 rounded-md shadow-lg hover:bg-violet-500">
                                Login
                            </button>
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
                    <button className="text-bold text-indigo-200 bg-orange-600 border px-4 py-2 rounded-md mx-5 shadow-lg hover:bg-violet-500">
                        Login
                    </button>
                    <div className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://img.freepik.com/free-photo/portrait-smiling-chef-uniform_329181-675.jpg?w=900&t=st=1682988804~exp=1682989404~hmac=ff3235ab1c32078c20b47f91bfa627de8d18f4fa34477eaed59de54ad5b55a77" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;