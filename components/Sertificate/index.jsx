import React, { useState } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import Image from 'next/image';
import SertificateModal from '@/components/Modals/SertificateModal';
import SertificateImage from '@/assets/images/Sertificates/Sertificate.png';

const Sertificate = () => {
    const [show, setShow] = useState(false);
    const [current, setCurrent] = useState(null);

    const onOpen = (i) => {
        setCurrent(i);
        setShow(true);
    };

    const images = [
        SertificateImage,
        SertificateImage,
        SertificateImage,
        SertificateImage,
        SertificateImage,
        SertificateImage,
    ];

    return (
        <div className="sertificate">
            <div className="sertificate__container">
                <h2 className="sertificate__title title">Сертификаты</h2>
                <ul className="sertificate-list">
                    {images.map((item, i) => (
                        <>
                            <li
                                className="sertificate-list__item"
                                onClick={() => onOpen(i)}>
                                <Image
                                    className="sertificate__image"
                                    src={item}
                                    alt="Sertificate"
                                />
                                <span className="sertificate-icon">
                                    <AiOutlineArrowLeft
                                        size={25}
                                        className="sertificate-icon__item"
                                    />
                                    <AiOutlineArrowRight
                                        size={25}
                                        className="sertificate-icon__item"
                                    />
                                </span>
                            </li>
                        </>
                    ))}
                    <SertificateModal show={show} setShow={setShow}>
                        <Image
                            className="sertificate__image"
                            src={images[current]}
                            alt="Sertificate"
                        />
                    </SertificateModal>
                </ul>
            </div>
        </div>
    );
};

export default Sertificate;
