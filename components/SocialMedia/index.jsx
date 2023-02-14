import React from 'react';
import { BsFacebook, BsInstagram, BsTelegram } from 'react-icons/bs';

const SocialMedia = () => {
    return (
        <ul className="footer-socialmedia">
            <li className="footer-socialmedia__item">
                <a href="#">
                    <BsTelegram size={24} className="icon" />
                </a>
            </li>
            <li className="footer-socialmedia__item">
                <a href="#">
                    <BsFacebook size={24} className="icon" />
                </a>
            </li>
            <li className="footer-socialmedia__item">
                <a href="#">
                    <BsInstagram size={24} className="icon" />
                </a>
            </li>
        </ul>
    );
};

export default SocialMedia;
