import { Page } from '@/layout';

import Banner from '@/components/Banner';
import AboutUs from '@/components/AboutUs';
import Accordions from '@/components/Accordions';
import Services from '@/components/Services';
import Sertificate from '@/components/Sertificate';
import ContactUs from '@/components/ContactUs';
import Location from '@/components/Location';

export default function Home() {
    return (
        <Page>
            <div className="container">
                <Banner />
                <AboutUs />
                <Accordions />
                <Services />
                <Sertificate />
                {/* <ContactUs /> */}
            </div>
            <Location />
        </Page>
    );
}
