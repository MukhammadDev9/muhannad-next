import clsx from 'clsx';
import React from 'react';

const CallLink = ({ children, callLink, button, classname }) => (
    <a
        href={callLink}
        className={clsx(
            'call__link',
            button && 'btn btn-call call',
            classname && classname,
        )}>
        {children}
    </a>
);

export default CallLink;
