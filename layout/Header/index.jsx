import React, { useEffect, useState } from 'react';
import Logo from '@/components/Atoms/Logo';
import Nav from './components/Nav';
import CallLink from '@/components/Atoms/CallLink';
import { BiPhoneCall } from 'react-icons/bi';
import { useIsMobile } from '@/hooks/useIsMobile';
import { BurgerIcon } from '@/components/icons';
import BurgerMenu from '@/components/BurgerMenu';

const Header = () => {
    const [show, setShow] = useState(false);
    const isMobile = useIsMobile(756);

    useEffect(() => {
        if (show) {
            document.body.classList.add('scroll-hidden');
        } else {
            document.body.classList.remove('scroll-hidden');
        }
    }, [show]);

    return (
        <header className="header">
            <div className="container">
                <div className="header__container">
                    <Logo />
                    <div className="header__menu">{!isMobile && <Nav />}</div>
                    {isMobile ? (
                        <span onClick={() => setShow(true)}>
                            <BurgerIcon className="menu-icon" />
                        </span>
                    ) : (
                        <button className="btn btn-call">
                            <span className="call-wrapper">
                                <BiPhoneCall size={24} className="call-icon" />
                                <CallLink />
                            </span>
                        </button>
                    )}
                    <BurgerMenu show={show} setShow={setShow} />
                </div>
            </div>
        </header>
    );
};

export default Header;
