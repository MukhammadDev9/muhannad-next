import ArrowDown from '@/components/icons/components/ArrowDown';
import { useIsMobile } from '@/hooks/useIsMobile';
import React from 'react';

const AccordionItem = ({ title, subTitle, list }) => {
    const isMobile = useIsMobile(425);
    return (
        <div className="accordion__item">
            <h3 className="title">
                <span>{title}</span>
                <ArrowDown color="#000" />
            </h3>
            <div className="accordion__item-content">
                <div className="sub-title">{subTitle}</div>
                <ul className="accordion__item-list">
                    {list.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AccordionItem;
