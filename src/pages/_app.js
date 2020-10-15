import Head from 'next/head'
import { Global } from '@emotion/core'
import ThemeProvider from '../theme'
import Navigation from '../components/molecules/navigation'
import Footer from '../components/molecules/footer'

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

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ASVF Montagne</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </Head>

      <ThemeProvider>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>

      <Global styles={globalStyle} />
    </>
  )
}

export default App
