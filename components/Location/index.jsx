import React from 'react';

const Location = () => {
    return (
        <div className="location">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d43284.55464112074!2d60.75156142153594!3d41.47312765063304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zMjIwMTAwLCDQpdC-0YDQtdC30LzRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0LMuINCj0YDQs9C10L3Rhywg0YPQuy4g0KXQvtC90LrQsCwgMTM4Rg!5e1!3m2!1sru!2s!4v1676564945715!5m2!1sru!2s"
                width="100%"
                height="100%"
                className="map"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default Location;
