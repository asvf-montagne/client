import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import PropTypes from 'prop-types'
import Footer from '@components/atoms/Footer'
import Navigation from '@components/molecules/Navigation'
import FlashInfo from '@components/atoms/FlashInfo'
import styles from './Layout.module.css'

// const DEFAULT_SEO = {
//   title: 'ASVF Montagne',
//   description: 'SEO made easy for Next.js projects',
//   openGraph: {
//     type: 'website',
//     locale: 'en_IE',
//     url: 'http://www.asvf-montagne.fr/',
//     title: 'ASVF Montagne',
//     description: 'SEO made easy for Next.js projects',
//     image:
//       'https://prismic-io.s3.amazonaws.com/gary-blog%2F3297f290-a885-4cc6-9b19-3235e3026646_default.jpg',
//     site_name: 'asvf-montagne.fr',
//     imageWidth: 1200,
//     imageHeight: 1200
//   }
// };

const infos = [
  {
    label: 'dim 08 nov 2020 / VTT, FTT et Handbike / Handisport',
    redirect: '/',
  },
  {
    label: 'dim 15 nov 2020 / Sortie VTT – 25 à 35km / VTT',
    redirect: '/',
  },
]

Layout.propTypes = {
  less: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default function Layout({ less = false, children }) {
  const [flash, setFlash] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const item = window.localStorage.getItem('flash')

    if (!item) {
      setFlash(true)
      window.localStorage.setItem(
        'flash',
        JSON.stringify({
          value: true,
          createdAt: new Date(),
        }),
      )
    } else {
      const { value, createdAt } = JSON.parse(item)
      const oneDay = 86400
      const isExpired =
        new Date(createdAt).getTime() - new Date().getTime() > oneDay
      if (isExpired) {
        window.localStorage.removeItem('flash')
      } else if (!value) {
        setFlash(false)
      } else {
        setFlash(true)
      }
    }
  }, [])

  const toggleFlash = () => {
    setFlash(false)
    window.localStorage.removeItem('flash')
    window.localStorage.setItem(
      'flash',
      JSON.stringify({
        value: false,
        createdAt: new Date(),
      }),
    )
  }

  function CurrentPageInner() {
    return (
      <>
        {!less && <Navigation />}
        <main className={styles.container}>{children}</main>
        {!less && <Footer />}
      </>
    )
  }

  function CurrentPage() {
    if (flash && router.pathname === '/') {
      return (
        <>
          <FlashInfo infos={infos} handleClose={() => toggleFlash()} />
          <div className={styles.container_flash}>
            <CurrentPageInner />
          </div>
        </>
      )
    }
    return <CurrentPageInner />
  }

  return (
    <>
      <Head>
        <title>ASVF Montagne</title>
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>
      {/*<NextSeo config={DEFAULT_SEO} />*/}
      <CurrentPage />
    </>
  )
}
