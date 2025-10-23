import React from 'react';
import Banner from "../Banner/Banner"
import Card from '../Card/ToyCard'

const HomePage = () => {
      const toyData = {
  thumbnail: "https://images.unsplash.com/photo-1616628188502-0ab8d8e6a4d0?w=400",
  toyName: "Robot Transformer",
  rating: 4.8,
  availableQuantity: 12,
  price: 39.99,
};
    return (
        <div>
            <Banner></Banner>
            <div className='my-10 container mx-auto'>
                <p className='text-3xl font-bold text-center mb-30'>Populer Toy's</p>
                <Card toy={toyData}></Card>
            </div>
            
        </div>
    );
};

export default HomePage;