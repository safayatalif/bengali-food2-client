import React from 'react';
import NavBanner from './banner/NavBanner';
import ChefsCard from './chefsCard/ChefsCard';
import Programs from './programs/Programs';
import FoodCarousel from './foodCarousel/FoodCarousel';

const Home = () => {
    return (
        <div>
            <NavBanner></NavBanner>
            <ChefsCard></ChefsCard>
            <Programs></Programs>
            <FoodCarousel></FoodCarousel>
        </div>
    );
};

export default Home;