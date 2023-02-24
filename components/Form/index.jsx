import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import clsx from 'clsx';
import axios from 'axios';
import { CHAT_ID, URL_API } from '@/utils/https';

const initialState = { name: '', surname: '', email: '', message: '' };
const Form = () => {
    const [details, setDetails] = useState(initialState);
    const [detailsError, setDetailsError] = useState({
        name: 'Имя не указано',
        surname: 'Фамилия не указана',
        email: 'Электронная почта не указана',
        message: 'Сообщение не указано',
    });
    const [formValid, setFormValid] = useState(false);
    const [detailsDirty, setDetailsDirty] = useState({
        name: false,
        surname: false,
        email: false,
        message: false,
    });

    useEffect(() => {
        const { name, surname, email, message } = detailsError;
        if (name || surname || email || message) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [details]);

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setDetailsDirty({ ...detailsDirty, [e.target.name]: true });
                break;
            case 'surname':
                setDetailsDirty({ ...detailsDirty, [e.target.name]: true });
                break;
            case 'email':
                setDetailsDirty({ ...detailsDirty, [e.target.name]: true });
                break;
            case 'message':
                setDetailsDirty({ ...detailsDirty, [e.target.name]: true });
                break;
        }
    };

    const nameHandler = (e) => {
        setDetails({ ...details, name: e.target.value });
        if (e.target.value === '') {
            setDetailsError({ ...detailsError, name: 'Имя не указано' });
        } else {
            setDetailsError({ ...detailsError, name: '' });
        }
    };

    const surnameHandler = (e) => {
        setDetails({ ...details, surname: e.target.value });
        if (e.target.value === '') {
            setDetailsError({ ...detailsError, surname: 'Фамилия не указана' });
        } else {
            setDetailsError({ ...detailsError, surname: '' });
        }
    };

    const emailHandler = (e) => {
        setDetails({ ...details, email: e.target.value });
        if (
            !String(e.target.value)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                )
        ) {
            setDetailsError({ ...detailsError, email: 'Некорректная почта' });
        } else {
            setDetailsError({
                ...detailsError,
                email: '',
            });
        }
    };

    const messageHandler = (e) => {
        setDetails({ ...details, message: e.target.value });
        if (e.target.value === '') {
            setDetailsError({
                ...detailsError,
                message: 'Сообщение не указано',
            });
        } else {
            setDetailsError({ ...detailsError, message: '' });
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const { name, surname, email, message } = details;

        const obj = {
            name: true,
            surname: true,
            email: true,
            message: true,
        };

        const send = `<b>Имя:</b> ${name}\n<b>Фамилия:</b> ${surname}\n<b>Электронная почта:</b> ${email}\n<b>Сообщение:</b> ${message}\n`;
        if (name === '' || surname === '' || email === '' || message === '') {
            setDetailsDirty(obj);
            setFormValid(false);
            toast.error('Заполните поля!');
        } else {
            if (formValid) {
                await axios.post(URL_API, {
                    chat_id: CHAT_ID,
                    parse_mode: 'html',
                    text: send,
                });
                setDetails(initialState);
                toast.success('Ваше сообщение успешно отправлено!');
            }
        }
    };

    return (
        <form
            id="#write-message"
            className="contactus__form form"
            onSubmit={onSubmit}>
            <p className="contactus__subtitle">Оставьте нам сообщение</p>
            <div className="form__item form__item-flex">
                <div className="form__input--area">
                    <label className="form__item_label" htmlFor={'name'}>
                        Ваше имя
                    </label>
                    <input
                        className={clsx(
                            'form__item_input',
                            detailsDirty.name && detailsError.name && 'error',
                        )}
                        type="text"
                        id={'name'}
                        name={'name'}
                        placeholder={'Введите имя'}
                        onChange={(e) => nameHandler(e)}
                        onBlur={(e) => blurHandler(e)}
                        value={details.name}
                    />
                    {detailsDirty.name && detailsError.name && (
                        <span className={clsx('error-message')}>
                            {detailsError.name}
                        </span>
                    )}
                </div>

                <div className="form__input--area">
                    <label className="form__item_label" htmlFor={'surname'}>
                        Ваше фамилия
                    </label>
                    <input
                        className={clsx(
                            'form__item_input',
                            detailsDirty.surname &&
                                detailsError.surname &&
                                'error',
                        )}
                        type="text"
                        id="surname"
                        name="surname"
                        placeholder={'Введите фамилию'}
                        onChange={(e) => surnameHandler(e)}
                        onBlur={(e) => blurHandler(e)}
                        value={details.surname}
                    />
                    {detailsDirty.surname && detailsError.surname && (
                        <span className={clsx('error-message')}>
                            {detailsError.surname}
                        </span>
                    )}
                </div>
            </div>
            <div className="form__item">
                <div className="form__input--area">
                    <label className="form__item_label" htmlFor={'email'}>
                        Электронная почта
                    </label>
                    <input
                        className={clsx(
                            'form__item_input',
                            detailsDirty.email && detailsError.email && 'error',
                        )}
                        type="email"
                        id="email"
                        name="email"
                        placeholder={'Введите электронную почту'}
                        onChange={(e) => emailHandler(e)}
                        onBlur={(e) => blurHandler(e)}
                        value={details.email}
                    />
                    {detailsDirty.email && detailsError.email && (
                        <span className={clsx('error-message')}>
                            {detailsError.email}
                        </span>
                    )}
                </div>
            </div>
            <div className="form__item">
                <div className="form__input--area">
                    <label className="form__item_label" htmlFor={'message'}>
                        Сообщение
                    </label>
                    <textarea
                        className={clsx(
                            'form__item_input form__item_input-textarea',
                            detailsDirty.message &&
                                detailsError.message &&
                                'error',
                        )}
                        name="message"
                        placeholder="Введите сообщение"
                        onChange={(e) => messageHandler(e)}
                        onBlur={(e) => blurHandler(e)}
                        value={details.message}
                    />
                    {detailsDirty.message && detailsError.message && (
                        <span className={clsx('error-message')}>
                            {detailsError.message}
                        </span>
                    )}
                </div>
            </div>
            <div className="form__item form__item-btn">
                <button type="submit" className="btn">
                    Отправить
                </button>
            </div>
        </form>
    );
};

export default Form;
