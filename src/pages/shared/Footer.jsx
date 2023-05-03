import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='grid grid-cols-3'>
                <div className="h-96 w-full bg-hero">
                    <h1>BUY GIFT CARDS ONLINE</h1>
                    <h4>Provide with our Gift Card to whom you most want and is sure.</h4>
                    <button className="text-bold text-indigo-200 bg-orange-600 border px-4 py-2 rounded-md shadow-lg hover:bg-violet-500">
                        Gift Card
                    </button>
                </div>
                <div className="h-96 w-full bg-hero">
                    <h1>BUY GIFT CARDS ONLINE</h1>
                    <h4>Provide with our Gift Card to whom you most want and is sure.</h4>
                    <input type="text" placeholder="Enter Your Email" className="input input-bordered input-primary w-full max-w-xs" />
                    <button className="text-bold text-indigo-200 bg-orange-600 border px-4 py-2 rounded-md shadow-lg hover:bg-violet-500">
                        Subscribe
                    </button>
                </div>
                <div className="h-96 w-full bg-hero">
                    <h1>BUY GIFT CARDS ONLINE</h1>
                    <h4>Provide with our Gift Card to whom you most want and is sure.</h4>
                    <button className="text-bold text-indigo-200 bg-orange-600 border px-4 py-2 rounded-md shadow-lg hover:bg-violet-500">
                        Explore
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Footer;