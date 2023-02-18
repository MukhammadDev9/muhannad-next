import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import Link from 'next/link';
import { info__content } from '@/utils/data';

const Info = () => {
    const data = info__content;

    return (
        <div className="info">
            <div className="info__container">
                <h1 className="info__title">
                    ОПЛАТА ЗА СЕРТИФИКАЦИЮ со стороны органа по сертификации ООО
                    « MUHANNAD SINOV SERVIS »
                </h1>
                <div className="info__subtitle">
                    (выписка с ПСМ-06:2022 «Оплата работ по сертификации»)
                </div>
                <ul className="info-content">
                    <li className="info-content__item">
                        <h3 className="info-content__title">Общие положения</h3>
                        <ul className="info-list">
                            {data.item1.map((item, i) => (
                                <li className="info-list__item" key={i}>
                                    {item.title}
                                    <ul className="info-sublist">
                                        {item.subList?.map((item, j) => (
                                            <li
                                                className="info-sublist__item"
                                                key={j}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className="info-content__item">
                        <h3 className="info-content__title">
                            Порядок оплаты работ по сертификайции
                        </h3>
                        <ul className="info-list">
                            {data.item2.map((item, i) => (
                                <li className="info-list__item" key={i}>
                                    {item.title}
                                    <ul className="info-sublist">
                                        {item.subList?.map((item, j) => (
                                            <li
                                                className="info-sublist__item"
                                                key={j}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className="info-content__item">
                        <h3 className="info-content__title">
                            Определение стоимости работ по сертификации
                        </h3>
                        <ul className="info-list">
                            {data.item3.map((item, i) => (
                                <li className="info-list__item" key={i}>
                                    {item.title}
                                    <ul className="info-sublist">
                                        {item.subList?.map((item, j) => (
                                            <li
                                                className="info-sublist__item"
                                                key={j}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Info;
