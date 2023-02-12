import React, { useState } from 'react';
import Image from 'next/image';
import AboutImage from '@/assets/images/About-us.png';
import Link from 'next/link';
import ArrowRight from '@/components/icons/components/ArrowRight';
import { useIsMobile } from '@/hooks/useIsMobile';
import ArrowDown from '../icons/components/ArrowDown';
import StaffingModal from '../Modals/StaffingModal';

const AboutUs = () => {
    const isMobile = useIsMobile();
    const [show, setShow] = useState(false);

    return (
        <section className="about">
            <div className="about__left">
                <div className="about-image-wrap">
                    <div className="about-video-border" />
                    <Image
                        className="about-image"
                        src={AboutImage}
                        alt="About-us-image"
                    />
                </div>
            </div>
            <div className="about__right">
                <h2 id="about-us" className="title">
                    О нас
                </h2>

                <div className="about__desc">
                    <div className="about__desc-item">
                        ООО «MUHANNAD SINOV SERVIS» был организован в 2016 году
                        и аккредитовал испытательную лабораторию. Основное
                        направления испытательной лаборатории железобетонных и
                        бетонных изделий. В 2022 году при ООО «MUHANNAD SINOV
                        SERVIS» был создан орган по сертификации строительной
                        продукции.
                    </div>
                    <div className="about__desc-item">
                        ООО MUHANNAD SINOV SERVIS» обслуживает производителей и
                        поставщиков строительной продукции и оказывает услуги по
                        сертификации и испытаниям данных продукций.
                    </div>
                    <div className="about__desc-item">
                        Орган по сертификации и испытательная лаборатория
                        расположены в центре города Ургенч и имеют
                        соответствующие ресурсы для оказание услуг по
                        сертификации и испытаниям. В таким ресурсам входит:
                    </div>
                    <div className="about__desc-item">
                        квалифицированные кадры, имеющие соответствующие опыт и
                        стаж работы в сфере сертификации и испытаниям
                        строительной продукции
                    </div>
                    <div className="about__desc-item">
                        испытательные оборудования и средства, имеющие высокий
                        точность измерения и не уступающим зарубежным аналогам
                    </div>
                    <div className="about__desc-item">
                        обеспечен соответствующими для проведения работ по
                        испытаниям и сертификации условиями (комнатами и
                        инвентарём)
                    </div>
                    <div className="about__desc-item">
                        При проведении работ по сертификации и испытаниям вас
                        обслужат кадры имеющие соответствующую квалификацию и
                        опыт работы:
                    </div>
                </div>

                <div className="about__links">
                    <div className="about__links-item">
                        <a onClick={() => setShow(true)}>
                            Сведения о кадровом составе
                            {!isMobile && (
                                <span>
                                    <ArrowRight />
                                </span>
                            )}
                        </a>
                    </div>
                    {isMobile && (
                        <div className="about__links-item">
                            <a className="more-details">
                                Подробнее
                                <span>
                                    <ArrowDown />
                                </span>
                            </a>
                        </div>
                    )}
                </div>
            </div>
            <StaffingModal show={show} setShow={setShow} />
        </section>
    );
};

export default AboutUs;
