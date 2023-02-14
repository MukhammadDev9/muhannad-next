import React from 'react';
import { menu_list } from '@/utils/data';

const Nav = ({ setShow }) => {
    const handle = () => {
        if (setShow != undefined) return setShow(false);
    };

    return (
        <nav className="nav">
            <ul className="nav__list">
                {menu_list.map((item, i) => (
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
