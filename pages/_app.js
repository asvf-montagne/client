import useRouterScroll from '@hooks/useRouterScroll'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import '@styles/globals.css'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import PropTypes from 'prop-types'
import React from 'react'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

Application.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
}

export default function Application({ Component, pageProps }) {
  useRouterScroll()

  return <Component {...pageProps} />
}
