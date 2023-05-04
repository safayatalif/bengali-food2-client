import React, { useContext, useEffect, useState } from 'react';
import ChefCard from '../chefCard/ChefCard';
import { AuthContext } from '../../../Providers/AuthProviders';
import Loader from '../../../components/loader/Loader';

const ChefsCard = () => {
    const [chefs, setChefs] = useState(null)
    const { isLoading, setIsLoading } = useContext(AuthContext)
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchData = async () => {
        const response = await fetch('https://bengali-food-server-safayatalif.vercel.app/chefs');
        const data = await response.json();
        setChefs(data);
        setIsLoading(false);
    };
    return (
        <div className='bangraoud-color'>
            <h1 className='text-4xl text-center text-indigo-200 font-semibold pt-12'>Popular <span className='text-orange-600 font-extrabold'>Chef</span> List</h1>
            <p className='text-indigo-200 text-center py-4'>List of chefs with basic info like name, picture, experience, recipes, likes, and short bio for website use.</p>
            <div className='grid md:grid-cols-3 gap-8 px-8 py-12'>
                {
                    isLoading ? <Loader></Loader> : <>{
                        chefs && chefs.map(chef => <ChefCard
                            key={chef.id}
                            chef={chef}
                        ></ChefCard>)
                    }</>
                }
            </div>
        </div>
    );
};

export default ChefsCard;