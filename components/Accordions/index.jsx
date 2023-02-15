import React, { useState } from 'react';
import { accordion_data } from '@/utils/data';
import { ArrowDown } from '@/components/icons';

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
                            className={`accordion__icon ${
                                selected === i && 'active'
                            }`}>
                            <ArrowDown color="#000" />
                        </span>
                    </div>
                    <div
                        className={`accordion__content ${
                            selected === i && 'show'
                        }`}>
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
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Accordions;
