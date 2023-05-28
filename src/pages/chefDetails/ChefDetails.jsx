import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import RecipesCard from '../../components/recipesCard/RecipesCard';

const ChefDetails = () => {
    const chefDetails = useLoaderData()
    const { id, chef_name, likes, years_of_experience, number_of_recipes, chef_picture, recipes, description } = chefDetails;
    return (
        <div className="bg-gradient-to-r from-violet-500 to-indigo-500 pt-12 px-8">
            <div >
                <div className="card md:card-side shadow-xl bg-hero bg-cover text-indigo-300">
                    <figure ><img className='rounded-md mx-12 h-full' src={chef_picture} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title underline">{chef_name}</h2>
                        <p><span className='font-semibold'>Description :</span> {description}</p>
                        <p><span className='font-semibold'>Recipes :</span> {number_of_recipes} Item</p>
                        <p><span className='font-semibold'>Experience</span> : {years_of_experience} Year</p>
                        <p><span className='font-semibold'>Likes </span> : {likes} <FaHeart className='inline-block text-orange-600'></FaHeart></p>
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
            <div className="grid md:grid-cols-3 gap-4 py-12">
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