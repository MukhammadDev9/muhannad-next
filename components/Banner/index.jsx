import Image from 'next/image';
import React from 'react';
import BannerImage from '@/assets/images/Banner.png';

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
                <div className="banner-video">
                    <div className="banner-video-border" />
                    <Image
                        className="banner-image"
                        src={BannerImage}
                        alt="banner-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
