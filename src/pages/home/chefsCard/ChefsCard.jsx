import React, { useEffect, useState } from 'react';
import ChefCard from '../chefCard/ChefCard';

const ChefsCard = () => {
    const [chefs, setChefs] = useState(null)
    useEffect(() => {
        fetch('https://bengali-food-server-safayatalif.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (
        <div className='bangraoud-color'>
            <h1 className='text-4xl text-center text-indigo-200 font-semibold pt-12'>Popular <span className='text-orange-600 font-extrabold'>Chef</span> List</h1>
            <p className='text-indigo-200 text-center py-4'>List of chefs with basic info like name, picture, experience, recipes, likes, and short bio for website use.</p>
            <div className='grid md:grid-cols-3 gap-8 px-8 py-12'>
                {
                    chefs && chefs.map(chef => <ChefCard
                        key={chef.id}
                        chef={chef}
                    ></ChefCard>)
                }
            </div>
        </div>
    );
};

export default ChefsCard;