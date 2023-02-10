import React from 'react';
import Logo from '@/components/Atoms/Logo';
import Nav from './components/Nav';
import CallLink from '@/components/Atoms/CallLink';
import { BiPhoneCall } from 'react-icons/bi';
import { useIsMobile } from '@/hooks/useIsMobile';
import { MenuBurger } from '@/components/icons';

const Header = () => {
    const isMobile = useIsMobile();

    console.log(isMobile);

    return (
        <header className="header">
            <div className="container">
                <div className="header__container">
                    <Logo />
                    <div className="header__menu">{!isMobile && <Nav />}</div>
                    {isMobile ? (
                        <MenuBurger />
                    ) : (
                        <button className="btn btn-call">
                            <span className="call-wrapper">
                                <BiPhoneCall size={24} className="call-icon" />
                                <CallLink />
                            </span>
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
