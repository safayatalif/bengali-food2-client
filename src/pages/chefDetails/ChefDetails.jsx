import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import RecipesCard from '../../components/recipesCard/RecipesCard';

const ChefDetails = () => {
    const chefDetails = useLoaderData()
    console.log(chefDetails)
    const { id, chef_name, likes, years_of_experience, number_of_recipes, chef_picture, recipes, description } = chefDetails;
    return (
        <div>
            <div className="bg-gradient-to-r from-violet-500 to-indigo-500 pt-12">
                <div className="card md:card-side shadow-xl bg-hero bg-cover text-indigo-300 m-4">
                    <figure ><img className='rounded-md mx-12 h-full' src={chef_picture} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title underline">{chef_name}</h2>
                        <p><span className='font-semibold'>Description :</span> {description}</p>
                        <p><span className='font-semibold'>Recipes :</span> {number_of_recipes} Item</p>
                        <p><span className='font-semibold'>Experience</span> : {years_of_experience} Year</p>
                        <p><span className='font-semibold'>Link </span> : {likes} <FaHeart className='inline-block text-orange-600'></FaHeart></p>
                        <div className="card-actions justify-end">
                            <Link to="/">
                                <button className="text-bold text-indigo-200 bg-orange-600 border px-4 py-2 rounded-md shadow-lg hover:bg-violet-500">
                                    Back
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                {
                    recipes.map(recipe=><RecipesCard 
                        key={recipe.id}
                        recipe={recipe}
                        ></RecipesCard>)
                }
            </div>
        </div>
    );
};

export default ChefDetails;