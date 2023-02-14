import { useIsMobile } from '@/hooks/useIsMobile';
import { useKeyPress } from '@/hooks/useKeyPress';
import Nav from '@/layout/Header/components/Nav';
import React, { useEffect, useRef } from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';
import CallLink from '../Atoms/CallLink';

const BurgerMenu = ({ show, setShow }) => {
    const isMobile = useIsMobile(1024);
    const escape = useKeyPress('Escape');
    const menuRef = useRef();

    useEffect(() => {
        const handler = (e) => {
            if (!menuRef?.current?.contains(e.target)) {
                setShow(false);
            }
        };

        document.addEventListener('mousedown', handler);
    });

    

    useEffect(() => {
        if (isMobile) {
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
            <div className="menu-wrap" ref={menuRef}>
                <div className="menu__close">
                    <GrFormClose
                        className="icon"
                        size={34}
                        onClick={() => setShow(false)}
                    />
                </div>
                <Nav setShow={setShow} />
                <button className="btn btn-call">
                    <span>
                        <BiPhoneCall size={24} className="call-icon" />
                        <CallLink callLink={'tel:+998622256999'}>
                            +998 62 225 69 99
                        </CallLink>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default BurgerMenu;
