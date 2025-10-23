import React from 'react';
import Banner from "../Banner/Banner"
import ToyCard from '../Card/ToyCard'
import { use } from 'react';

const toydata = fetch('/toy.json').then(res => res.json());

const HomePage = () => {

        const data = use(toydata);


    const safeArray = Array.isArray(data) ? data : []
    const highData = [...safeArray].sort((a,b)=>b.rating - a.rating);
    const ratingData = highData.slice(0,6);

    return (
        <div>
            <Banner></Banner>
            <div className='my-10 container mx-auto'>
                <p className='text-3xl font-bold text-center mb-30'>Populer Toy's</p>
                <div className='grid'>
                    {/* <aside className='col-span-3 sticky top-0 h-0' >
                        <LeftHome></LeftHome>
                    </aside> */}
                    <section className='main col-span-6 grid grid-cols-3'>
                        {ratingData.map((toy, index) => (
                            <ToyCard key={toy.toyId || index} ratingData={toy} />
                        ))}
                    </section>
                </div>
            </div>
            
        </div>
    );
};

export default HomePage;