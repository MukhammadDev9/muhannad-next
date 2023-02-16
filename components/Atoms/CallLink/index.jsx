import React from 'react';

const CallLink = ({ children, callLink }) => (
    <a href={callLink} className="call__link">
        {children}
    </a>
);

export default CallLink;
