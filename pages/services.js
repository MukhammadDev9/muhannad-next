import { Page } from '@/layout';

import ServicesContent from '@/components/ServicesPage';
import GoBack from '@/components/Atoms/GoBack';

const ServicesPage = () => {
    return (
        <Page>
            <div className="container">
                <GoBack />
                <ServicesContent />
            </div>
        </Page>
    );
};

export default ServicesPage;
