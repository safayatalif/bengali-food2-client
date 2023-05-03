import React from 'react';
import NavBanner from './banner/NavBanner';
import ChefsCard from './chefsCard/ChefsCard';
import Programs from './programs/Programs';

const Home = () => {
    return (
        <div>
            <NavBanner></NavBanner>
            <ChefsCard></ChefsCard>
            <Programs></Programs>
        </div>
    );
};

export default Home;