import React from 'react';
import Link from 'next/link';
import { LogoSvg } from '@/components/icons';

const Logo = () => {
    return (
        <Link href="/" className="logo">
            <LogoSvg />
        </Link>
    );
};

export default Logo;
