import React, { useState } from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { useIsMobile } from '@/hooks/useIsMobile';
import Nav from './components/Nav';
import BurgerMenu from '@/components/BurgerMenu';
import CallLink from '@/components/Atoms/CallLink';
import { BurgerIcon } from '@/components/icons';
import Logo from '@/components/Atoms/Logo';

const Header = () => {
    const [show, setShow] = useState(false);
    const isMobile = useIsMobile(768);

    return (
        <header className="header">
            <div className="header__container container">
                <Logo />

                {!isMobile && (
                    <>
                        <div className="header__menu">
                            <Nav />
                        </div>
                        <a href="tel:+998622256999" className="btn-call call">
                            <BiPhoneCall size={24} className="call__icon" />
                            <CallLink callLink={'tel:+998622256999'}>
                                +998 62 225 69 99
                            </CallLink>
                        </a>
                    </>
                )}

                {isMobile && (
                    <span onClick={() => setShow(true)}>
                        <BurgerIcon className="icon" />
                    </span>
                )}
            </div>
            <BurgerMenu show={show} setShow={setShow} />
        </header>
    );
};

export default Header;
