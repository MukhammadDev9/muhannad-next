import React from 'react';
import Footer from '../Footer';
import Head from '../Head';
import Header from '../Header';

const Page = ({ children }) => {
    return (
        <div className="wrapper">
            <Head />

            <Header />
            <main className="page">{children}</main>
            {/* <Footer /> */}
        </div>
    );
};

export default Page;
