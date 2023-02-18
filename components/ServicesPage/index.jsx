import React from 'react';
import { services__content } from '@/utils/data';

const ServicesContent = () => {
    const data = services__content;

    return (
        <div className="services-page">
            <h1 className='services-page__title'>
                ООО «MUHANNAD SINOV SERVIS» оказывает услуги по сертификации и
                испытаниям следующей продукции:
            </h1>
            <div className="services-page__content">
                <ul className="services-page__list">
                    {data.item1.map((item, i) => (
                        <li className="services-page__item" key={i}>
                            {item}
                        </li>
                    ))}
                </ul>
                <ul className="services-page__list">
                    {data.item2.map((item, i) => (
                        <li className="services-page__item" key={i}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ServicesContent;
