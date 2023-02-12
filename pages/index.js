import { Page } from '@/layout';

import Banner from '@/components/Banner';
import AboutUs from '@/components/AboutUs';
import Accordions from '@/components/Accordions';

export default function Home() {
    return (
        <Page>
            <div className="container">
                <Banner />
                <AboutUs />
                <Accordions />
            </div>
        </Page>
    );
}
