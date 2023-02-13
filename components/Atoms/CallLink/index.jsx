import React from 'react';

const CallLink = ({ callLink = 'tel:+998622256999' }) => {
    return (
        <a className="call-link" href={callLink}>
            +998 62 225 69 99
        </a>
    );
};

export default CallLink;
