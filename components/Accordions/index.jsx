import React from 'react';
import { accordion_data } from '@/utils/data';
import AccordionItem from './Accordion-Item';

const Accordions = () => {
    return (
        <section className="accordion-wrap">
            {accordion_data.map((item, i) => (
                <AccordionItem
                    title={item.title}
                    subTitle={item.subTitle}
                    list={item.list}
                    key={i}
                />
            ))}
        </section>
    );
};

export default Accordions;
