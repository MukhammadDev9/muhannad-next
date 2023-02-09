import React from 'react';

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item current">Главная</li>
                <li className="nav__item">О нас</li>
                <li className="nav__item">Наши услуги</li>
                <li className="nav__item">Контакты</li>
            </ul>
        </nav>
    );
};

export default Nav;
