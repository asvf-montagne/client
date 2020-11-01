import React from "react";
import '@styles/globals.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import useRouterScroll from "@hooks/useRouterScroll";


Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function Application({ Component, pageProps }) {
  useRouterScroll();

  return (
    <Component {...pageProps} />
  );
}
