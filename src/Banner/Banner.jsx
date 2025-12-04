import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import { Autoplay, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='ton'>
            <div>
                <Swiper
                    // spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    // navigation={true}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><div className='h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]'>
                        <img className='rounded-2xl w-full h-full object-cover' src="https://i.ibb.co.com/Vcf4GFDc/banner1.webp" alt="" />
                        </div></SwiperSlide>
                    <SwiperSlide><div className='h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]'>
                        <img className='rounded-2xl w-full h-full object-cover' src="https://i.ibb.co.com/B5tzxsxw/banner2.webp" alt="" />
                        </div></SwiperSlide>
                    <SwiperSlide><div className='h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]'>
                        <img className='rounded-2xl w-full h-full object-cover' src="https://i.ibb.co.com/DDD368bq/banner3.webp" alt="" />
                        </div></SwiperSlide>
                    <SwiperSlide><div className='h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]'>
                        <img className='rounded-2xl w-full h-full object-cover' src="https://i.ibb.co.com/wZmzdR7m/banner4.webp" alt="" />
                        </div></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;