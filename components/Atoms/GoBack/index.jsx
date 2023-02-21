import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import Link from 'next/link';

const GoBack = () => {
    return (
        <div className="go-back">
            <Link href={'/'} className="go-back__link">
                <BiArrowBack size={20} className="go-back__icon" />
                Назад
            </Link>
        </div>
    );
};

export default GoBack;
