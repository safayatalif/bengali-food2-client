/* eslint-disable react/prop-types */
import React from 'react';
import { FaHeart } from "react-icons/fa";
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';


const ChefCard = ({ chef }) => {
    const { id, chef_name, likes, years_of_experience, number_of_recipes, chef_picture, } = chef;
    return (
        <div className="card w-full shadow-xl bg-hero bg-cover text-indigo-300">
            <figure>
                <LazyLoad>
                    <img src={chef_picture} alt="Shoes" />
                </LazyLoad>
            </figure>

            <div className="card-body">
                <h2 className="card-title underline">{chef_name}</h2>
                <p><span className='font-semibold'>Recipes :</span> {number_of_recipes} Item</p>
                <p><span className='font-semibold'>Experience</span> : {years_of_experience} Year</p>
                <p><span className='font-semibold'>Link </span> : {likes} <FaHeart className='inline-block text-orange-600'></FaHeart></p>
                <div className="card-actions justify-end">
                    <Link to={`${id}`}>
                        <button className="my-btn">
                            View Recipes
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;