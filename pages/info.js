import { Page } from '@/layout';

import Info from '@/components/Info';
import GoBack from '@/components/Atoms/GoBack';

export default function InfoPage() {
    return (
        <Page>
            <div className="container">
                <GoBack />
                <Info />
            </div>
        </Page>
    );
}
