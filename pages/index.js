import { Page } from '@/layout';

import Banner from '@/components/Banner';
import AboutUs from '@/components/AboutUs';
import Accordions from '@/components/Accordions';
import Services from '@/components/Services';

export default function Home() {
    return (
        <Page>
            <div className="container">
                <Banner />
                <AboutUs />
                <Accordions />
                <Services />
            </div>
        </Page>
    );
}
