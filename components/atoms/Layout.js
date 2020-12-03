import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import PropTypes from 'prop-types'
import Footer from '@components/atoms/Footer'
import Navigation from '@components/molecules/Navigation'
import FlashInfo from '@components/atoms/FlashInfo'
import config from '@helpers/config'
import styles from './Layout.module.css'

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default function Layout({ children }) {
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
      } else {
        setFlash(value)
      }
    }
  }, [])

  useEffect(() => {
    console.log('FLASH', flash, router.pathname)
  }, [flash])

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

  return (
    <>
      <Head>{/*<link rel="icon" href="/favicon.ico" />*/}</Head>
      {flash && router.pathname === '/' ? (
        <>
          <FlashInfo
            infos={config.flashInfos}
            handleClose={() => toggleFlash()}
          />
          <div className={styles.container_flash}>
            <Navigation flash={true} />
            <main className={styles.container}>{children}</main>
            <Footer />
          </div>
        </>
      ) : (
        <>
          <Navigation flash={false} />
          <main className={styles.container}>{children}</main>
          <Footer />
        </>
      )}
    </>
  )
}
