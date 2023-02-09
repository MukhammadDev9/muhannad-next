import NextHead from 'next/head';

const Head = ({ title = 'Muhannad Sinov Service' }) => {
    return (
        <NextHead>
            {/* Title */}
            <title>{title}</title>
            <meta name="og:title" content={title} />

            {/* Description */}

            {/* General */}
            <meta name="author" content="appx group" />

            {/* Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossorigin
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Open+Sans:wght@300;400;500&display=swap"
                rel="stylesheet"
            />
        </NextHead>
    );
};

export default Head;
