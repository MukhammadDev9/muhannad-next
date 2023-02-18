import clsx from 'clsx';
import React from 'react';
import { BsFacebook, BsInstagram, BsTelegram } from 'react-icons/bs';
import { InstagramIcon } from '../icons';

const SocialMedia = ({ colors }) => {
    return (
        <ul className={clsx('footer-socialmedia', colors && 'colors')}>
            <li className="footer-socialmedia__item">
                <a href="#">
                    <BsTelegram size={24} className="icon telegram" />
                </a>
            </li>
            <li className="footer-socialmedia__item">
                <a href="#">
                    <BsFacebook size={24} className="icon facebook" />
                </a>
            </li>
            <li className="footer-socialmedia__item">
                <a href="#">
                    {colors ? (
                        <InstagramIcon />
                    ) : (
                        <BsInstagram size={24} className="icon instagram" />
                    )}
                </a>
            </li>
        </ul>
    );
};

export default SocialMedia;
