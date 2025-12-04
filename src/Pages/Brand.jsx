import React from 'react';
import amazon_vactor from '../assets/brands/amazon_vector.png'
import amazon from '../assets/brands/amazon.png'
import casio from '../assets/brands/casio.png'
import moonstar from '../assets/brands/moonstar.png'
import randstas from '../assets/brands/randstad.png'
import star from '../assets/brands/star.png'
import star_people from '../assets/brands/start_people.png'
import Marquee from 'react-fast-marquee';

const brand = [amazon_vactor, amazon, casio, moonstar, randstas, star, star_people]

const Brand = () => {
    return (
        <div className='my-12 sm:my-16 md:my-20 lg:my-25 flex flex-col gap-6 sm:gap-8 md:gap-10 justify-center items-center px-4 sm:px-6 lg:px-8'>
            <div className='text-2xl text-black sm:text-3xl md:text-4xl font-extrabold text-center'>
                We've helped thousands of sales teams
            </div>

            <div className='flex gap-3 sm:gap-5 items-center container mx-auto '>
                <Marquee
                 autoFill={true}
                 >
                    {
                        brand.map((logo,index)=><div className='mx-4 sm:mx-6 md:mx-10 flex items-center' key={index}><img src={logo} alt=""  /></div>)
                    }
                </Marquee>
            </div>
        </div>
    );
};

export default Brand;