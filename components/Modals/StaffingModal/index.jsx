import Image from 'next/image';
import React, { useEffect } from 'react';
import StaffingImage from '@/assets/images/Staffing-info.png';
import { GrClose } from 'react-icons/gr';
import { useKeyPress } from '@/hooks/useKeyPress';

const StaffingModal = ({ show, setShow }) => {
    const escape = useKeyPress('Escape');

    useEffect(() => {
        if (escape) {
            setShow(false);
        }
    }, [escape]);

    useEffect(() => {
        if (show) {
            document.body.classList.add('scroll-hidden');
        } else {
            document.body.classList.remove('scroll-hidden');
        }
    }, [show]);

    return (
        <div
            id="staffing__modal"
            className={`staffing__info  ${show && 'show'}`}>
            <div className="staffing__image-wrap">
                <Image
                    className="staffing__image"
                    src={StaffingImage}
                    alt={StaffingImage}
                />
                <span>
                    <GrClose size={18} onClick={() => setShow(false)} />
                </span>
            </div>
        </div>
    );
};

export default StaffingModal;
