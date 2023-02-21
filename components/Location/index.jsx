import React from 'react';

const Location = () => {
    return (
        <div className="location">
            <h1 className="location__title title">Где мы находимся?</h1>
            <div className="location__container">
                <iframe
                    src="https://yandex.uz/map-widget/v1/?l=sat&ll=60.657383%2C41.534245&mode=search&oid=134931543379&ol=biz&sctx=ZAAAAAgBEAAaKAoSCTRLAtTUUE5AEUFF1a90xkRAEhIJJGO1%2BX%2BNL0ARinJp%2FMLbG0AiBgABAgMEBSgKOABA8aQBSAFiMmNvbGxlY3Rpb25zX3JhbmtpbmdfbW9kZWw9Y29sbGVjdGlvbnNfcmVsZXZfd19kc3NtYiVjb2xsZWN0aW9uc19yZWxldl90aHJlc2hvbGQ9MTAwNTAwMDAwYiBjb2xsZWN0aW9uc19yZXR1cm5fYnlfZ2VvaWQ9dHJ1ZWoCdXqdAc3MTD2gAQCoAQC9AdxNJG3CAQbT6q%2FU9gPqAQDyAQD4AQCCAhVtdWhhbm5hZCBzaW5vdiBzZXJ2aXOKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=60.657383%2C41.534245&sspn=0.004731%2C0.002318&text=muhannad%20sinov%20servis&z=18"
                    width="100%"
                    height="100%"
                    className="map"
                    frameborder="1"
                    allowfullscreen="true"
                />
            </div>
        </div>
    );
};

export default Location;
