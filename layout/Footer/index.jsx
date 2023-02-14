import React from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';
import SocialMedia from '@/components/SocialMedia';
import CallLink from '@/components/Atoms/CallLink';
import Logo from '@/components/Atoms/Logo';

const Footer = () => {
    const isMobile = useIsMobile(426);

    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__item">
                    <Logo />
                </div>
                <ul className="footer__item footer-list">
                    <li className="footer-list__item">
                        <a href="#about-us" className="footer-list__link">
                            О нас
                        </a>
                    </li>
                    <li className="footer-list__item">
                        <a href="#services" className="footer-list__link">
                            Наши услуги
                        </a>
                    </li>
                    <li className="footer-list__item">
                        <a href="#contacts" className="footer-list__link">
                            Контакты
                        </a>
                    </li>
                </ul>
                <ul className="footer__item footer-contactlist">
                    {!isMobile && (
                        <li className="footer-contactlist__item-socialmedia">
                            <SocialMedia />
                        </li>
                    )}
                    <li className="footer-contactlist__item">
                        <div className="footer-contactlist__callLink">
                            <span className="footer-contactlist__callLink-span">
                                Номер телефона:{' '}
                            </span>
                            <CallLink callLink={'tel:+998622256999'}>
                                +998 62 225 69 99
                            </CallLink>
                        </div>
                    </li>
                    <li className="footer-contactlist__item">
                        <div className="footer-contactList__address">
                            <p>
                                220100, Хорезмская область, г. Ургенч, ул.
                                Хонка, 138F
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            {isMobile && (
                <div className="container">
                    <div className="footer-contactlist__item-socialmedia--bottom">
                        <SocialMedia />
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Footer;
