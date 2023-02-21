import React from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';
import SocialMedia from '@/components/SocialMedia';
import CallLink from '@/components/Atoms/CallLink';
import { FooterLogo } from '@/components/icons';
import Link from 'next/link';

const Footer = () => {
    const isMobile = useIsMobile(851);

    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__item">
                    <Link href="/#">
                        <FooterLogo />
                    </Link>
                </div>
                <div className="footer__item footer__content">
                    <div className="footer-contacts">
                        <div className="footer-contacts__item footer-contacts__item-call">
                            <span className="span-block-mobile">
                                Номер телефона:{' '}
                            </span>

                            <span>
                                <CallLink callLink={'tel:+998622256999'}>
                                    +998 62 225 69 99
                                </CallLink>
                            </span>
                        </div>
                        <div className="footer-contacts__item footer-contacts__address">
                            <a href="https://goo.gl/maps/qVriMKBvjpTaVBQE6">
                                220100, Хорезмская область, г. Ургенч, ул.
                                Хонка, 138F
                            </a>
                        </div>
                    </div>
                    <ul className="footer-list">
                        <li className="footer-list__item">
                            <a
                                href={`/#about-us`}
                                className="footer-list__link">
                                О нас
                            </a>
                        </li>
                        <li className="footer-list__item">
                            <a
                                href={`/#services`}
                                className="footer-list__link">
                                Наши услуги
                            </a>
                        </li>
                        <li className="footer-list__item">
                            <a
                                href={`/#contacts`}
                                className="footer-list__link">
                                Контакты
                            </a>
                        </li>
                    </ul>
                    {!isMobile && (
                        <div className="footer-leaders">
                            <div className="footer-leaders__item">
                                <p>
                                    <span className="span-block">
                                        {' '}
                                        Директор:
                                    </span>
                                    <span className="span-block">
                                        Рахимов Рахим Курбанбай угли.
                                    </span>
                                    <span className="span-block">
                                        Телефон:{' '}
                                        <span className="footer__link">
                                            <CallLink
                                                callLink={'tel:+998942315500'}>
                                                +998 94 231 55 00
                                            </CallLink>
                                        </span>
                                    </span>
                                </p>
                            </div>
                            <div className="footer-leaders__item">
                                <p>
                                    <span className="span-block">
                                        Руководитель органа по сертификации:
                                    </span>
                                    <span className="span-block">
                                        Кадиров Учкун Ибодуллаевич.
                                    </span>
                                    <span className="span-block">
                                        Телефон:{' '}
                                        <span className="footer__link">
                                            <CallLink
                                                callLink={'tel:+998919980999'}>
                                                +998 91 998 09 99
                                            </CallLink>
                                        </span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="footer__item">
                    <SocialMedia />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
