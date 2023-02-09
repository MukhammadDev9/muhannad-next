import React from 'react';
import Head from '../Head';
import Header from '../Header';

const Page = ({ children }) => {
    return (
        <div className="wrapper">
            <Head />

            <Header />
            <main className="page">{children}</main>
        </div>
    );
};

export default Page;
