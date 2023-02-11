import React from 'react';

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item current">
                    <a href="#banner">Главная</a>
                </li>
                <li className="nav__item">
                    <a href="#about-us">О нас</a>
                </li>
                <li className="nav__item">
                    <a href="#">Наши услуги</a>
                </li>
                <li className="nav__item">
                    <a href="#">Контакты</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
