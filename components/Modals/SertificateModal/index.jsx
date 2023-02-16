import React, { useEffect } from 'react';
import { GrClose } from 'react-icons/gr';

const SertificateModal = ({ children, show, setShow }) => {
    const onClose = () => {
        setShow(false);
    };

    useEffect(() => {
        if (show) {
            document.body.classList.add('scroll-hidden');
            document.body.style.paddingRight = '17px';
        } else {
            document.body.classList.remove('scroll-hidden');
            document.body.style.paddingRight = '0';
        }
    }, [show]);

    return (
        <div className={`sertificate-modal ${show && 'show'}`}>
            <div className="sertificate-modal__item">
                {children}
                <span
                    className="sertificate-modal__icon icon"
                    onClick={onClose}>
                    <GrClose />
                </span>
            </div>
        </div>
    );
};

export default SertificateModal;
