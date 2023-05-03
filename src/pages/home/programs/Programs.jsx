import React from 'react';
import program1 from '../../../assets/images/recipe.png'
import program2 from '../../../assets/images/meal.png'
import program3 from '../../../assets/images/vegetarian.png'
import program4 from '../../../assets/images/healthy.png'

const Programs = () => {
    return (
        <div className='px-8 pb-12 text-indigo-200 bangraoud-color'>
            <h1 className='text-4xl text-center font-bold'>Our <span className='text-orange-400 font-extrabold'>Best</span> Programs</h1>
            <p className='text-center py-4 mb-8'>We always want to provide the best value for you and your health, join us to maximize the benefits</p>
            <div className='grid md:grid-cols-4 gap-4'>
                <div className="program-card">
                    <img className='h-20 w-16 md:w-1/4 mr-4' src={program1} alt="" />
                    <div>
                        <h1 className='text-2xl font-bold underline' >Healthy Recipe</h1>
                        <p>Healthier Recipes, from food & nutrition experts</p>
                    </div>
                </div>
                <div className="program-card">
                    <img className='h-20 w-16 md:w-1/4 mr-4' src={program2} alt="" />
                    <div>
                        <h1 className='text-2xl font-bold underline' >Healthy Meals</h1>
                        <p>Learn how to become a meal-planning pro</p>
                    </div>
                </div>
                <div className="program-card">
                    <img className='h-20 w-16 md:w-1/4 mr-4' src={program3} alt="" />
                    <div>
                        <h1 className='text-2xl font-bold underline' >Healthy Eating</h1>
                        <p>Eat healthy with our expert & inspiration tips</p>
                    </div>
                </div>
                <div className="program-card">
                    <img className='h-20 w-16 md:w-1/4 mr-4' src={program4} alt="" />
                    <div>
                        <h1 className='text-2xl font-bold underline' >Healthy Life</h1>
                        <p>Your life is your choice, make yourself healthier</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programs;