import * as React from 'react';

const MenuBurger = (props) => (
    <svg
        width={32}
        height={32}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
            d="M28 13.333H4M28 8H4M28 18.667H4M28 24H4"
            stroke="#000"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default MenuBurger;
