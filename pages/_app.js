import seoImage from '@assets/images/cervin_opengraph.jpg'
import useRouterScroll from '@hooks/useRouterScroll'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import '@styles/globals.css'
import { DefaultSeo } from 'next-seo';
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

const description = 'Site internet de l\'association sportive de villefontaine pour la montagne et l\'escalade en isère.'
const defaultSeo = {
  titleTemplate: '%s | ASVF Montagne',
  description,
  additionalMetaTags: [
    {
      property: 'keywords',
      content: 'escalade,ski,alpinisme,association sportive,isère,villefontaine'
    },
    {
      property: 'language',
      content: 'FR'
    }
  ],
  openGraph: {
    locale: 'fr_FR',
    site_name: 'ASVF Montagne',
    url: 'https://beta.asvf-montagne.fr',
    type: 'website',
    description,
    images: [
      {
        url: seoImage,
        width: 1200,
        height: 546,
        alt: 'cervin',
      }
    ]
  }
}

export default function Application({ Component, pageProps }) {
  useRouterScroll()

  return <>
    <DefaultSeo {...defaultSeo} />
    <Component {...pageProps} />
  </>
}
