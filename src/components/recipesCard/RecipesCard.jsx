import React, { useState } from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toast';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const RecipesCard = ({ recipe }) => {
    const [favorite, setFavorite] = useState(false);
    const { cooking_method, food_image, ingredients, rating, recipe_name } = recipe;
    const handleFavorite = () => {
        setFavorite(!favorite)
        toast("Add to Favorite successfully!")
    }

    return (
        <div>
            <div className="card w-full h-full bg-hero bg-cover text-indigo-300 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl">{recipe_name}</h2>
                    <p><span className='font-semibold'>Cooking Method :</span>
                        {cooking_method.slice(0, 200)}...
                    </p>
                    <div>
                        <div>
                            <h5 className='font-bold'>Ingredients :</h5>
                            <ul className=''>
                                {
                                    ingredients.slice(0, 5).map((ingredient, index) => <li key={index}>{ingredient}</li>)
                                }
                                <li>etc ..</li>
                            </ul>
                        </div>
                        <div className='flex justify-between'>
                            <div className=''><span className='font-semibold'> Rating: </span>
                                {rating}
                                <Rating
                                    className=''
                                    style={{ maxWidth: 150 }}
                                    value={Rating}
                                    readOnly
                                />
                            </div>
                            <button onClick={handleFavorite} disabled={favorite} className={favorite ? "text-orange-500" : ""}><FaHeart className='h-8 w-8'></FaHeart></button>
                        </div>
                    </div>
                </div>
                <figure><img src={food_image} alt="Shoes" /></figure>
            </div>
            <ToastContainer />
        </div>
    );
};

export default RecipesCard;