import React from 'react';
import CallLink from '@/components/Atoms/CallLink';
import Logo from '@/components/Atoms/Logo';
import FirstCallLink from './CallLinks/FirstCallLink';
import SecondCallLink from './CallLinks/SecondCallLink';
import SocialMedia from '../../components/SocialMedia';
import { useIsMobile } from '@/hooks/useIsMobile';

const Footer = () => {
    const isMobile = useIsMobile();
    const isTablet = useIsMobile(768);

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrap">
                    <div className="footer__left">
                        <div className="footer__item item-1">
                            <Logo />
                        </div>
                        <div className="footer__item item-2">
                            <ul className="footer__list">
                                <li className="footer__list-item">
                                    <a href="#">О нас</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#">Наши услуги</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#">Контакты</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {!isTablet && (
                        <div className="footer__item">
                            <div className="footer__leader">
                                <p>
                                    <span>Директор:</span>
                                    Рахимов Рахим Курбанбай угли, телефон:
                                    {<FirstCallLink />}
                                </p>
                            </div>
                            <div className="footer__leader">
                                <p>
                                    <span>
                                        Руководитель органа по сертификации :
                                    </span>
                                    Матниязов Кудрат Бахриярович, телефон:
                                    {<SecondCallLink />}
                                </p>
                            </div>
                        </div>
                    )}
                    <div className="footer__right">
                        <div className="footer__item item-3">
                            {!isTablet && <SocialMedia />}

                            <div className="footer__call-link">
                                <span>Номер телефона: </span>
                                <CallLink />
                            </div>

                            <div className="footer__address">
                                220100, Хорезмская область, г. Ургенч, ул.
                                Хонка, 138F
                            </div>
                        </div>
                    </div>
                </div>
                {isTablet && (
                    <div className="social-media">
                        <SocialMedia />
                    </div>
                )}
            </div>
        </footer>
    );
};

export default Footer;
