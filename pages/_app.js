import { ToastContainer } from 'react-toastify';
import '@/styles/main.scss';
import 'swiper/css';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <Component {...pageProps} />;
        </>
    );
}
