import React, { useState } from 'react';
import CallLink from '../Atoms/CallLink';
import SocialMedia from '../SocialMedia';
import axios from 'axios';
import { CHAT_ID, URL_API } from '@/utils/https';

const ContactUs = () => {
    const initialState = {
        name: '',
        surname: '',
        email: '',
        message: '',
    };
    const [details, setDetails] = useState(initialState);

    const onSubmit = async (event) => {
        event.preventDefault();
        const message = `<b>Имя:</b> ${details.name}\n<b>Фамилия:</b> ${details.surname}\n<b>Email:</b> ${details.email}\n<b>Сообщение:</b> ${details.message}\n`;
        await axios.post(URL_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message,
        });
        setDetails(initialState);
    };
    return (
        <div id="contact-us" className="contactus">
            <h1 className="contactus__title title">Свяжитесь с нами онлайн</h1>
            <div className="contactus__container">
                <form className="contactus__form form" onSubmit={onSubmit}>
                    <p className="contactus__subtitle">
                        Оставьте нам сообщение
                    </p>
                    <div className="form__item form__item-flex">
                        <div className="form__input--area">
                            <label className="form__item_label" htmlFor="name">
                                Ваше имя
                            </label>
                            <input
                                className="form__item_input"
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Введите имя"
                                onChange={(e) =>
                                    setDetails({
                                        ...details,
                                        name: e.target.value,
                                    })
                                }
                                value={details.name}
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
                                name="surname"
                                placeholder="Введите фамилию"
                                onChange={(e) =>
                                    setDetails({
                                        ...details,
                                        surname: e.target.value,
                                    })
                                }
                                value={details.surname}
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
                                name="email"
                                placeholder="Введите Email"
                                onChange={(e) =>
                                    setDetails({
                                        ...details,
                                        email: e.target.value,
                                    })
                                }
                                value={details.email}
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
                                name="message"
                                onChange={(e) =>
                                    setDetails({
                                        ...details,
                                        message: e.target.value,
                                    })
                                }
                                value={details.message}
                                placeholder="Введите сообщение"
                                required
                            />
                        </div>
                    </div>
                    <div className="form__item form__item-btn">
                        <button type="submit" className="btn">
                            Отправить
                        </button>
                    </div>
                </form>
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
