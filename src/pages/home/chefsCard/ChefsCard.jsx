import React, { useEffect, useState } from 'react';
import ChefCard from '../chefCard/ChefCard';

const ChefsCard = () => {
    const [chefs , setChefs] = useState(null)
    useEffect(()=>{
        fetch('https://bengali-food-server-safayatalif.vercel.app/chefs')
        .then(res=>res.json())
        .then(data=>setChefs(data))
    },[])
    return (
        <div className='grid grid-cols-3 bg-gradient-to-r from-violet-500 to-indigo-500 gap-8 px-8 py-12'>
            {
                chefs && chefs.map(chef=><ChefCard 
                    key={chef.id}
                    chef={chef}
                    ></ChefCard>)
            }
        </div>
    );
};

export default ChefsCard;