import * as React from 'react';

const ArrowDown = ({ color }) => (
    <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="m4 6 4 4 4-4"
            stroke={color || '#0AB1E5'}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default ArrowDown;
