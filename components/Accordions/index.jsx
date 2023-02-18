import React, { useState } from 'react';
import { accordion_data } from '@/utils/data';
import { ArrowDown } from '@/components/icons';
import Link from 'next/link';

const Accordions = () => {
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) return setSelected(null);

        setSelected(i);
    };

    return (
        <section className="accordion">
            {accordion_data.map((item, i) => (
                <div className="accordion__item" key={i}>
                    <div className="accordion__title" onClick={() => toggle(i)}>
                        <h3 className="accordion__title-text">{item.title}</h3>
                        <span
                            className={
                                selected === i
                                    ? 'accordion__icon active'
                                    : 'accordion__icon'
                            }>
                            <ArrowDown color="#000" />
                        </span>
                    </div>
                    <div
                        className={
                            selected === i
                                ? 'accordion__content show'
                                : 'accordion__content'
                        }>
                        {item.subTitle && (
                            <div className="accordion__subtitle">
                                {item.subTitle}
                            </div>
                        )}
                        <ul className="accordion-list">
                            {item.list.map((element, j) => (
                                <li className="accordion-list__item" key={j}>
                                    {element}
                                </li>
                            ))}
                        </ul>
                        <div className="accordion-moredetails">
                            <Link
                                href={'/info'}
                                className="accordion-moredetails__link">
                                Подробнее...
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Accordions;
