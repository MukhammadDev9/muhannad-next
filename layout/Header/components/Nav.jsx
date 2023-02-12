import React, { useEffect, useRef } from 'react';

const Nav = ({ setShow }) => {
    const handle = () => {
        setShow(false);
    };

    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <a href="#banner" onClick={() => handle()}>
                        Главная
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#about-us" onClick={() => handle()}>
                        О нас
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#" onClick={() => handle()}>
                        Наши услуги
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#" onClick={() => handle()}>
                        Контакты
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
