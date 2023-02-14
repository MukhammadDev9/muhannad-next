import React from 'react';

const CallLink = ({ children, callLink }) => {
    return (
        <a className="call__link" href={callLink}>
            {children}
        </a>
    );
};

export default CallLink;
