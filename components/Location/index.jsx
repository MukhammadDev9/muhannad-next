import React from 'react';

const Location = () => {
    return (
        <div className="location">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5973.247687159332!2d60.657523!3d41.534088!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDMyJzAyLjciTiA2MMKwMzknMjcuMSJF!5e0!3m2!1sru!2s!4v1676615848077!5m2!1sru!2s"
                width="100%"
                height="100%"
                className="map"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default Location;
