import React from 'react';

const CallLink = ({ children, callLink, button }) => (
    <a
        href={callLink}
        className={`call__link ${button && 'btn btn-call call'}`}>
        {children}
    </a>
);

export default CallLink;
