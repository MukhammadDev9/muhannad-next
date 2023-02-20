import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Autoplay,
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
} from 'swiper';
import { BannerContent } from '../Banner';
import { Slide1, Slide2, Slide3, Slide4, Slide5 } from '@/assets/images/Banner';

// Styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BannerSwiper = () => {
    SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);

    const images = [Slide1, Slide2, Slide3, Slide4, Slide5];

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 4000,
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="swiper">
            {images.map((item, i) => (
                <SwiperSlide className="swiper--slide" key={i}>
                    <BannerContent />
                    <div className="black-filter" />
                    <Image
                        className="swiper__image"
                        src={item}
                        alt="banner-image"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default BannerSwiper;
