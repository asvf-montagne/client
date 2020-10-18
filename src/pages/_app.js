import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Global } from '@emotion/core'
import ThemeProvider from '../theme'
import Navigation from '../components/molecules/Navigation'
import Footer from '../components/molecules/Footer'

const globalStyle = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  body {
    min-height: 100%;
  }
`

const exceptions = [
  '/login',
  '/register',
  '/forgot-password',
  '/confirm-email',
  '/verify',
  '/change-password',
]

function App({ Component, pageProps }) {
  const router = useRouter()

  const filter = (currentRoute) => !exceptions.some((route) => currentRoute.includes(route))

  return (
    <>
      <Head>
        <title>ASVF Montagne</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </Head>

      <ThemeProvider>
        {filter(router.pathname) && (
          <Navigation />
        )}
        <Component {...pageProps} />
        {filter(router.pathname) && (
          <Footer />
        )}
      </ThemeProvider>

      <Global styles={globalStyle} />
    </>
  )
}

export default App
