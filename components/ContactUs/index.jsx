import React from 'react';
import CallLink from '../Atoms/CallLink';
import SocialMedia from '../SocialMedia';

const ContactUs = () => {
    return (
        <div id="contact-us" className="contactus">
            <h1 className="contactus__title title">Свяжитесь с нами онлайн</h1>
            <p className="contactus__subtitle">
                Оставьте нам сообщение и мы вам ответим
            </p>
            <div className="contactus__container">
                <form action="#" className="contactus__form">
                    <div className="form__item form__item-flex">
                        <div className="form__input--area">
                            <label className="form__item_label" htmlFor="name">
                                Ваше имя
                            </label>
                            <input
                                className="form__item_input"
                                type="text"
                                id="name"
                                placeholder="Введите имя"
                                required
                            />
                        </div>
                        <div className="form__input--area">
                            <label
                                className="form__item_label"
                                htmlFor="surname">
                                Ваше Фамилия
                            </label>
                            <input
                                className="form__item_input"
                                type="text"
                                id="surname"
                                placeholder="Введите фамилию"
                                required
                            />
                        </div>
                    </div>
                    <div className="form__item">
                        <div className="form__input--area">
                            <label className="form__item_label" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="form__item_input"
                                type="email"
                                id="email"
                                placeholder="Введите Email"
                                required
                            />
                        </div>
                    </div>
                    <div className="form__item">
                        <div className="form__input--area">
                            <label
                                className="form__item_label"
                                htmlFor="textarea">
                                Сообщение
                            </label>
                            <textarea
                                className="form__item_input form__item_input-textarea"
                                type="text"
                                id="textarea"
                                placeholder="Введите сообщение"
                            />
                        </div>
                    </div>
                    <button type="button" className="form__item-btn btn">
                        Отправить
                    </button>
                </form>
                <div className="contactus-content">
                    <ul className="contactus-content__list">
                        <li className="contactus-content__item">
                            <h4 className="contactus-content__title">
                                Контакты
                            </h4>
                            <CallLink
                                callLink={'tel:+998942315500'}
                                classname="contactus-content__text">
                                +998 94 231 55 00
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
                            <p className="contactus-content__text">
                                220911, Хорезмская область, Хивинский район, МФЙ
                                Шамахулум
                            </p>
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
