import React from 'react';
import Image from 'next/image';
import { GrClose } from 'react-icons/gr';
import clsx from 'clsx';

const SertificateModal = ({ show, setShow, image }) => {
    const onClose = () => {
        setShow(false);
    };

    return (
        <div
            className={clsx('sertificate-modal', show && 'active')}
            onClick={onClose}>
            <div
                className="sertificate-modal__content"
                onClick={(e) => e.stopPropagation()}>
                <Image
                    className="sertificate-modal__image"
                    src={image}
                    alt={image}
                />
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
