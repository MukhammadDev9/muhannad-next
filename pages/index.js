import { Page } from '@/layout';

import Footer from '@/components/Footer';
import Banner from '@/components/Banner';

export default function Home() {
    return (
        <Page>
            <div className="container">
                <Banner />
            </div>
            <Footer />
        </Page>
    );
}
