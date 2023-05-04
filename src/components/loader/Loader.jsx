import React from 'react';
import './Loader.css'

const Loader = () => {
    return (
        <div className="loading-page w-1/2 mx-auto">
            <div className="loader"></div>
            <p>Loading...</p>
        </div>
    );
};

export default Loader;