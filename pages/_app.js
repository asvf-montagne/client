import '@styles/globals.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

export default function Application({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}
