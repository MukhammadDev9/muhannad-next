import React, { useEffect } from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';
import clsx from 'clsx';
import { useKeyPress } from '@/hooks/useKeyPress';
import Nav from '@/layout/Header/components/Nav';
import CallLink from '../Atoms/CallLink';

const BurgerMenu = ({ show, setShow }) => {
    const escape = useKeyPress('Escape');

    useEffect(() => {
        if (show) {
            document.body.classList.add('scroll-hidden');
        } else {
            document.body.classList.remove('scroll-hidden');
        }
    }, [show]);

    useEffect(() => {
        if (escape) {
            setShow(false);
        }
    }, [escape]);

    return (
        <div
            className={clsx('menu', show && 'show')}
            onClick={() => setShow(false)}>
            <div className="menu__opacity"></div>
            <div className="menu__content" onClick={(e) => e.stopPropagation()}>
                <div className="menu__icon">
                    <GrFormClose
                        className="icon"
                        size={34}
                        onClick={() => setShow(false)}
                    />
                </div>
                <Nav setShow={setShow} />
                <CallLink callLink={'tel:+998622256999'} button={true}>
                    <BiPhoneCall size={24} className="call-icon" />
                    +998 62 225 69 99
                </CallLink>
            </div>
        </div>
    );
};

export default BurgerMenu;
