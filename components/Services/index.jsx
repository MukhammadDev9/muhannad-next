import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useIsMobile } from '@/hooks/useIsMobile';
import Link from 'next/link';

const Services = () => {
    const isMobile = useIsMobile(1025);

    return (
        <div id="services" className="services">
            <div className="services__container">
                <h2 className="services__title title">Наши услуги</h2>
                <div className="services-grid">
                    <div className="services-grid__item">
                        <p className="services-grid__number">1</p>
                        <p className="services-grid__text">
                            - Материалы строительные нерудные из отсевов
                            дробления плотных горных пород при производстве
                            щебня
                        </p>
                    </div>
                    <div className="services-grid__item">
                        <p className="services-grid__number">2</p>
                        <p className="services-grid__text">
                            Щебень и гравий из плотных горных пород для
                            строительных работ.
                        </p>
                    </div>
                    <div className="services-grid__item">
                        <p className="services-grid__number">3</p>
                        <p className="services-grid__text">
                            Смеси песчано-гравийные для строительных работ.
                        </p>
                    </div>
                    <div className="services-grid__item">
                        <p className="services-grid__number">4</p>
                        <p className="services-grid__text">
                            Заполнители пористые для легких бетонов. Блоки
                            керамзитобетонные стеновые
                        </p>
                    </div>
                    <div className="services-grid__item">
                        <p className="services-grid__number">5</p>
                        <p className="services-grid__text">
                            Цилиндры и полуцилиндры теплоизоляционные из
                            минеральной ваты на синтетическом связующем.
                            Материалы строительные теплоизоляционные на основе
                            минеральных волокон
                        </p>
                    </div>
                </div>
                <div className="services-bottom">
                    <Link href="/about-us" className="services-bottom__link">
                        Посмотреть все услуги
                        {!isMobile && (
                            <span className="services-bottom__icon">
                                <AiOutlineArrowRight />
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Services;
