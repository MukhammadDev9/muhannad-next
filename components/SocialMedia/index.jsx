import React from 'react';
import { BsFacebook, BsInstagram, BsTelegram } from 'react-icons/bs';

const SocialMedia = () => {
    return (
        <ul className="media__list">
            <li className="media__list-item">
                <a href="#">
                    <BsTelegram size={24} className="media__icon" />
                </a>
            </li>
            <li className="media__list-item">
                <a href="#">
                    <BsFacebook size={24} className="media__icon" />
                </a>
            </li>
            <li className="media__list-item">
                <a href="#">
                    <BsInstagram size={24} className="media__icon" />
                </a>
            </li>
        </ul>
    );
};

export default SocialMedia;
