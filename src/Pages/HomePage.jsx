import React from 'react';
import Banner from "../Banner/Banner"
import ToyCard from '../Card/ToyCard'
import { use } from 'react';
import Extra1 from './Extra1';
import Blog from './Blog';
import { useTitle } from "../CustomeHook/Hook";
import Footer from '../Footer/Footer';
import Brand from './Brand';
import Count from './Count'

const toydata = fetch('./toy.json').then(res => res.json());

const HomePage = () => {
    useTitle("Home");
    const data = use(toydata);



    const safeArray = Array.isArray(data) ? data : []
    const highData = [...safeArray].sort((a, b) => b.rating - a.rating);
    const ratingData = highData.slice(0, 8);

    return (
        <div className='bg-linear-to-br from-[#FFE3F2] via-[#FFF7D6] to-[#E0F7FF]'>
            <Banner></Banner>
            <div>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-15'>
                    <p className='text-2xl text-black sm:text-3xl md:text-4xl font-extrabold text-center py-6 sm:py-8 md:py-10'>Populer Toy's</p>
                    <section className='main grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
                        {ratingData.map((toy, index) => (
                            <ToyCard key={toy.toyId || index} ratingData={toy} />
                        ))}
                    </section>
                    <div className="mt-16 text-center">
                        <a
                            href="/alltoy/All"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition duration-150"
                        >
                            Show All Toy
                        </a>
                    </div>
                    <div>
                        <Brand></Brand>
                    </div>
                    <div className='text-2xl text-black sm:text-3xl md:text-4xl font-extrabold text-center px-4'>
                        Toy Show Highlights
                    </div>
                     <div>
                        <Count></Count>
                    </div>
                    <section >
                        <Extra1></Extra1>
                    </section>
                    <section >
                        <Blog></Blog>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default HomePage;