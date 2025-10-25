import React from 'react';
import Banner from "../Banner/Banner"
import ToyCard from '../Card/ToyCard'
import { use } from 'react';
import Extra1 from './Extra1';
import Blog from './Blog';
import { useTitle } from "../CustomeHook/Hook";

const toydata = fetch('/toy.json').then(res => res.json());

const HomePage = () => {
    useTitle("Home");
    const data = use(toydata);


    const safeArray = Array.isArray(data) ? data : []
    const highData = [...safeArray].sort((a,b)=>b.rating - a.rating);
    const ratingData = highData.slice(0,6);

    return (
        <div>
            <Banner></Banner>
            <div className='bg-[radial-gradient(circle,rgba(238,174,202,1)_0%,rgba(148,187,233,1)_100%)]'>
                <div className=' container mx-auto'>
                <p className='text-3xl font-bold text-center py-10'>Populer Toy's</p>
                <div className='grid '>
                    <section className='mainc grid grid-cols-3 '>
                        {ratingData.map((toy, index) => (
                            <ToyCard key={toy.toyId || index} ratingData={toy} />
                        ))}
                    </section>  
                </div>
                <section >
                        <Extra1></Extra1>
                    </section>
                    <section>
                        <Blog></Blog>
                    </section>
            </div>
            </div>
        </div>
    );
};

export default HomePage;