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
            <Swiper
                spaceBetween={30}
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
                <SwiperSlide><div className='h-[500px]'>
                    <img src="https://i.ibb.co/Qv3wr1YT/disney-banneroriginal-66f8edd0eb03-original-format-webp.webp" alt="" />
                    </div></SwiperSlide>
                <SwiperSlide><div className='h-[500px]'>
                    <img src="https://i.ibb.co/9kcqNqN1/Strip-Banner-5-original-format-webp.webp" alt="" />
                    </div></SwiperSlide>
                <SwiperSlide><div className='h-[500px]'>
                    <img src="https://i.ibb.co/YFFxnkCh/50-damaged-box1-4.webp" alt="" />
                    </div></SwiperSlide>
                <SwiperSlide><div className='h-[500px]'>
                    <img src="https://i.ibb.co/GQzcS1Qk/Labubu-Toy-Collection-Cover.webp" alt="" />
                    </div></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;