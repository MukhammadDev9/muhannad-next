import React, { useState } from 'react';
import { ArrowDown } from '@/components/icons';

const AccordionItem = ({ title, subTitle, list }) => {
    const [select, setSelect] = useState(false);

    return (
        <div className={`accordion__item ${select && 'active'}`}>
            <h3 className="title" onClick={() => setSelect(!select)}>
                <span>{title}</span>
                <span className={`icon ${select && 'active'}`}>
                    <ArrowDown color="#000" />
                </span>
            </h3>
            {select && (
                <div className="accordion__item-content">
                    {subTitle && <div className="sub-title">{subTitle}</div>}
                    <ul className="accordion__item-list">
                        {list.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default AccordionItem;
