import React, { useEffect } from 'react';
import { GrClose } from 'react-icons/gr';
import Image from 'next/image';
import { useKeyPress } from '@/hooks/useKeyPress';
import StaffingImage from '@/assets/images/Staffing-info.png';

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
        <div className={`staffing  ${show && 'show'}`}>
            <div className="staffing__wrap">
                <Image
                    className="staffing__image"
                    src={StaffingImage}
                    alt={StaffingImage}
                />
                <span className="staffing__icon">
                    <GrClose size={18} onClick={() => setShow(false)} />
                </span>
            </div>
        </div>
    );
};

export default StaffingModal;
