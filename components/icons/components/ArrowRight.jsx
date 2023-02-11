import * as React from 'react';

const ArrowRight = (props) => (
    <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
            d="M5 12h14M12 5l7 7-7 7"
            stroke="#0AB1E5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default ArrowRight;
