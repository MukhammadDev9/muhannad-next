import React, { useEffect, useState } from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useKeyPress } from '@/hooks/useKeyPress';
import Nav from './components/Nav';
import BurgerMenu from '@/components/BurgerMenu';
import CallLink from '@/components/Atoms/CallLink';
import { BurgerIcon } from '@/components/icons';
import Logo from '@/components/Atoms/Logo';

const Header = () => {
    const [show, setShow] = useState(false);
    const isMobile = useIsMobile(769);
    const escape = useKeyPress('Escape');

    const onClose = () => setShow(false);

    useEffect(() => {
        if (escape) {
            setShow(false);
        }
    }, [escape]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 769) return setShow(false);
        };

        window.addEventListener('resize', handleResize);
    });

    useEffect(() => {
        if (show) {
            document.body.classList.add('scroll-hidden');
        } else {
            document.body.classList.remove('scroll-hidden');
        }
    }, [show]);

    return (
        <header className="header">
            <div className="header__container container">
                <Logo />

                {!isMobile && (
                    <>
                        <div className="header__menu">
                            <Nav />
                        </div>
                        <CallLink callLink="tel:+998622256999" button={true}>
                            <BiPhoneCall size={24} className="call__icon" />
                            +998 62 225 69 99
                        </CallLink>
                    </>
                )}

                {isMobile && (
                    <span onClick={() => setShow(true)}>
                        <BurgerIcon className="icon" />
                    </span>
                )}
            </div>
            {isMobile ? <BurgerMenu show={show} setShow={setShow} /> : onClose}
        </header>
    );
};

export default Header;
