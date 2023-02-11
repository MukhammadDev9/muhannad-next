import { useIsMobile } from '@/hooks/useIsMobile';
import { useKeyPress } from '@/hooks/useKeyPress';
import Nav from '@/layout/Header/components/Nav';
import React, { useEffect } from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';
import CallLink from '../Atoms/CallLink';

const BurgerMenu = ({ show, setShow }) => {
    const isMobile = useIsMobile(1024);
    const escape = useKeyPress('Escape');

    useEffect(() => {
        if (!isMobile) {
            setShow(false);
        } else {
            setShow(true);
        }
    }, []);

    useEffect(() => {
        if (escape) {
            setShow(false);
        }
    }, [escape]);

    return (
        <div className={`menu ${show && 'show'}`}>
            <div className="menu-wrap">
                <div className="menu__close">
                    <GrFormClose size={34} onClick={() => setShow(false)} />
                </div>
                <Nav />

                <button className="btn btn-call">
                    <span>
                        <BiPhoneCall size={24} className="call-icon" />
                        <CallLink />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default BurgerMenu;
