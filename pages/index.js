import { Page } from '@/layout';

import Banner from '@/components/Banner';
import AboutUs from '@/components/AboutUs';

export default function Home() {
    return (
        <Page>
            <div className="container">
                <Banner />
                <AboutUs />
            </div>
        </Page>
    );
}
