import React, { useState } from 'react';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/useIsMobile';
import { about__desc } from '@/utils/data';
import StaffingModal from '@/components/Modals/StaffingModal';
import { ArrowRight, ArrowDown } from '@/components/icons';
import AboutImage from '@/assets/images/About-us.png';

const AboutUs = () => {
    const [show, setShow] = useState(false);
    const [openMore, setOpenMore] = useState(false);
    const isMobile = useIsMobile(1025);

    const toggle = () => {
        setOpenMore(!openMore);
    };

    return (
        <section className="about">
            <div className="about__container">
                <div className="about__left">
                    <div className="video">
                        <div className="video__border" />
                        <Image
                            className="video__image"
                            src={AboutImage}
                            alt="About-us-image"
                        />
                    </div>
                </div>

                <div className="about__right">
                    <h2 id="about-us" className="about__title title">
                        О нас
                    </h2>

                    <ul className={`about-list ${openMore && 'active'}`}>
                        {about__desc.map((text, i) => (
                            <li className="about-list__item" key={i}>
                                <p>{text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="about-bottom">
                <a className="about-bottom__link" onClick={() => setShow(true)}>
                    Сведения о кадровом составе
                    {!isMobile && (
                        <span className="about-bottom__icon about-bottom__icon-animate">
                            <ArrowRight />
                        </span>
                    )}
                </a>
                {isMobile && (
                    <a
                        className="about-bottom__link about-bottom__link-moredetails"
                        onClick={toggle}>
                        Подробнее
                        <span
                            className={`about-bottom__icon ${
                                openMore && 'active'
                            }`}>
                            <ArrowDown />
                        </span>
                    </a>
                )}
            </div>
            <StaffingModal show={show} setShow={setShow} />
        </section>
    );
};

export default AboutUs;
