import React, { useState } from 'react';
import Logo from '@/components/Atoms/Logo';
import Nav from './components/Nav';
import CallLink from '@/components/Atoms/CallLink';
import { BiPhoneCall } from 'react-icons/bi';
import { useIsMobile } from '@/hooks/useIsMobile';
import { BurgerIcon } from '@/components/icons';
import BurgerMenu from '@/components/BurgerMenu';

const Header = () => {
    const [show, setShow] = useState(false);
    const isMobile = useIsMobile(768);

    return (
        <header className="header">
            <div className="container">
                <div className="header__container">
                    <Logo />

                    {!isMobile && (
                        <>
                            <div className="header__menu">
                                <Nav />
                            </div>
                            <a
                                href="tel:+998622256999"
                                className="btn-call call-wrap">
                                <BiPhoneCall size={24} className="call-icon" />
                                <CallLink callLink={'tel:+998622256999'} />
                            </a>
                        </>
                    )}

                    {isMobile && (
                        <span onClick={() => setShow(true)}>
                            <BurgerIcon className="icon" />
                        </span>
                    )}
                    <BurgerMenu show={show} setShow={setShow} />
                </div>
            </div>
        </header>
    );
};

export default Header;
