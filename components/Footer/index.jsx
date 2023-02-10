import React from 'react';
import CallLink from '@/components/Atoms/CallLink';
import Logo from '@/components/Atoms/Logo';
import { BsFacebook, BsInstagram, BsTelegram } from 'react-icons/bs';
import FirstCallLink from './CallLinks/FirstCallLink';
import SecondCallLink from './CallLinks/SecondCallLink';
import SocialMedia from '../SocialMedia';
import { useIsMobile } from '@/hooks/useIsMobile';

const Footer = () => {
    const isMobile = useIsMobile();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__container">
                    <Logo />

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

                    <div className="footer__content">
                        <div className="footer__content-item">
                            <p>
                                <span style={{ display: 'block' }}>
                                    Директор:
                                </span>
                                Рахимов Рахим Курбанбай угли, телефон:{' '}
                                {<FirstCallLink />}
                            </p>
                        </div>
                        <div className="footer__content-item">
                            <p>
                                <span style={{ display: 'block' }}>
                                    Руководитель органа по сертификации :
                                </span>
                                Матниязов Кудрат Бахриярович, телефон:{' '}
                                {<SecondCallLink />}
                            </p>
                        </div>
                    </div>

                    <div className="footer__contacts">
                        {!isMobile && <SocialMedia />}
                        <div className="footer__call-link">
                            <span>Номер телефона: </span>
                            <CallLink />
                        </div>
                        <div className="footer__address">
                            220100, Хорезмская область, г. Ургенч, ул. Хонка,
                            138F
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
