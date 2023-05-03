import React from 'react';

const FoodCarousel = () => {
    return (
        <div className='px-8 bangraoud-color h-1/4 py-12 text-indigo-200'>
            <h1 className='text-4xl text-center font-bold'>Our <span className='text-orange-400 font-extrabold'>Bengali Food</span> Recipes:</h1>
            <p className='text-center py-4 mb-8'>We always want to provide the best value for you and your health, join us to maximize the benefits</p>
            <div className="carousel rounded-box shadow-xl">
                <div className="carousel-item">
                    <img src="https://img.freepik.com/free-photo/delicious-indian-food-tray_23-2148723505.jpg?w=740&t=st=1683084898~exp=1683085498~hmac=22da79b56f2498080cb3e1c387b1b27a7df27a21230f8b877521d98476f9ebb7" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src="https://img.freepik.com/premium-photo/dum-handi-chicken-biryani-is-prepared-earthen-clay-pot-called-haandi-popular-indian-non-vegetarian-food_466689-52414.jpg?w=900" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src="https://img.freepik.com/premium-photo/peruvian-traditional-seafood-fried-fish-rice-with-seafood-sweaty-steamed-fish-ceviche-sudado-arroz-con-mariscos-chicharron-cabrilla_68399-385.jpg?w=996" alt="fish fry" />
                </div>
                <div className="carousel-item">
                    <img src="https://img.freepik.com/premium-photo/traditional-oriental-shawarma-close-up-brown-wall-side-view-copy-space_166116-3004.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=robertav1_2_sidr" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src="https://img.freepik.com/free-photo/samosas-with-chicken-fillet-green-herbs_2829-10800.jpg?w=900&t=st=1683085597~exp=1683086197~hmac=aadca0892f79b933a6e71fc53458e81261c517a0fab11388db7b73fb482859db" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src="https://img.freepik.com/free-photo/vitamin-salad-fresh-tomatoes-arugula-feta-cheese-peppers-dietary-menu-proper-nutrition-top-view-flat-lay_2829-20066.jpg?t=st=1683080339~exp=1683080939~hmac=d349974e0a59c3bb0534268467397acdddba36d11c2c0c951382c0c13199512e" alt="" />
                </div>
                <div className="carousel-item">
                    <img src="https://img.freepik.com/free-psd/delicious-food-menu-social-media-template_505751-3038.jpg?w=740&t=st=1683085982~exp=1683086582~hmac=857a00ee1be35b5abb54c4f0d6a29e7bfe45ff9d71a9c47b47dafe6570490f09" alt="Burger" />
                </div>
            </div>
        </div>
    );
};

export default FoodCarousel;