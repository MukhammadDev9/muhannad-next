import React from 'react';
import BannerSwiper from '../Swiper';

const Banner = () => {
    return (
        <section className="banner">
            <BannerSwiper />
        </section>
    );
};

export const BannerContent = () => {
    return (
        <div className="banner__content">
            <p className="banner__subtitle">Орган по сертификации продукции</p>
            <h1 className="banner__title title">
                OOO « MUHANNAD SINOV SERVIS »
            </h1>
            <p className="banner__description">
                OOO MUHANNAD SINOV SERVIS» обслуживает производителей и
                поставщиков строительной продукции и оказывает услуги по
                сертификации и испытаниям данных продукций.
            </p>
            <a href="#write-message" className="banner__btn btn">
                Написать нам письмо
            </a>
        </div>
    );
};

export default Banner;
