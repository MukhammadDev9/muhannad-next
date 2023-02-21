import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { CHAT_ID, URL_API } from '@/utils/https';
import Input from './FormAtoms/Input';

const Form = () => {
    const [details, setDetails] = useState({
        name: '',
        surname: '',
        email: '',
        message: '',
    });

    const onSubmit = async (event) => {
        event.preventDefault();
        const message = `<b>Имя:</b> ${details.name}\n<b>Фамилия:</b> ${details.surname}\n<b>Email:</b> ${details.email}\n<b>Сообщение:</b> ${details.message}\n`;
        try {
            await axios.post(URL_API, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: message,
            });
            notifySuccess();
            setDetails(initialState);
        } catch (e) {
            notifyError(e);
        }
    };

    const notifySuccess = () => {
        toast.success('Success!', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    };

    const notifyError = (error) => {
        toast.error(error, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    };

    return (
        <form className="contactus__form form" onSubmit={onSubmit}>
            <p className="contactus__subtitle">Оставьте нам сообщение</p>
            <div className="form__item form__item-flex">
                <Input
                    name={'name'}
                    placeholder={'Введите имя'}
                    label={'Ваше имя'}
                    type={'text'}
                />
                <Input
                    name={'surname'}
                    placeholder={'Введите фамилию'}
                    label={'Ваше фамилия'}
                    type={'text'}
                />
            </div>
            <div className="form__item">
                <Input
                    name={'email'}
                    placeholder={'Введите Email'}
                    label={'Email'}
                    type={'email'}
                />
            </div>
            <div className="form__item">
                <Input
                    name={'message'}
                    placeholder={'Введите сообщение'}
                    label={'Сообщение'}
                    type={'text'}
                    textarea={true}
                />
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
