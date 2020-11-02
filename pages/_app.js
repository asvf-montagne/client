import React from "react";
import '@styles/globals.css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
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
