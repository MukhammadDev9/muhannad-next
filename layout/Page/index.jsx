import React from 'react';
import Head from '../Head';
import Header from '../Header';
import Footer from '../Footer';

const Page = ({ children }) => {
    return (
        <div className="wrapper">
            <Head />

            <Header />
            <main className="page">{children}</main>
            <Footer />
        </div>
    );
};

export default Page;
