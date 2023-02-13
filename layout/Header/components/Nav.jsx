import React from 'react';

const Nav = ({ setShow }) => {
    const handle = () => {
        if (setShow != undefined) return setShow(false);
    };

    const data = [
        {
            title: 'Главная',
            link: '#',
        },
        {
            title: 'О нас',
            link: '#about-us',
        },
        {
            title: 'Наши услуги',
            link: '#services',
        },
        {
            title: 'Контакты',
            link: '#contacts',
        },
    ];

    return (
        <nav className="nav">
            <ul className="nav__list">
                {data.map((item, i) => (
                    <li className="nav__item" key={i}>
                        <a href={item.link} onClick={handle}>
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
