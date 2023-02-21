import React from 'react';
import CallLink from '../Atoms/CallLink';
import SocialMedia from '../SocialMedia';
import Form from '../Form';

const ContactUs = () => {
    return (
        <div id="contact-us" className="contactus">
            <h1 className="contactus__title title">Свяжитесь с нами онлайн</h1>
            <div className="contactus__container">
                <Form />
                <div className="contactus-content">
                    <ul className="contactus-content__list">
                        <li className="contactus-content__item">
                            <h4 className="contactus-content__title">
                                Контакты
                            </h4>
                            <CallLink
                                callLink={'tel:+998919980999'}
                                classname="contactus-content__text">
                                +998 91 998 09 99
                            </CallLink>
                        </li>
                        <li className="contactus-content__item">
                            <h4 className="contactus-content__title">
                                Электронный адрес органа по сертификации
                            </h4>
                            <a
                                href="mailto:mss-2020@mail.ru"
                                className="contactus-content__text">
                                mss-2020@mail.ru
                            </a>
                        </li>
                        <li className="contactus-content__item">
                            <h4 className="contactus-content__title">
                                Юридический адрес:
                            </h4>
                            <a
                                href="https://goo.gl/maps/qVriMKBvjpTaVBQE6"
                                className="contactus-content__text">
                                220911, Хорезмская область, Хивинский район, МФЙ
                                Шамахулум
                            </a>
                        </li>
                        <li className="contactus-content__item">
                            <SocialMedia colors={true} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
