import React from 'react';
import Image from 'next/image';
import BannerImage from '@/assets/images/Banner/Banner2.png';

const Banner = () => {
    return (
        <section className="banner">
            <div className="banner__left">
                <p className="banner__subtitle">
                    Орган по сертификации продукции
                </p>
                <h1 className="banner__title">OOO « MUHANNAD SINOV SERVIS »</h1>
                <p className="banner__description">
                    OOO MUHANNAD SINOV SERVIS» обслуживает производителей и
                    поставщиков строительной продукции и оказывает услуги по
                    сертификации и испытаниям данных продукций.
                </p>
                <button className="btn">Написать нам письмо</button>
            </div>
            <div id="banner" className="banner__right">
                <div className="video">
                    <div className="video__border" />
                    <Image
                        className="video__image"
                        src={BannerImage}
                        alt="banner-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
