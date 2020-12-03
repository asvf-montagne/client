import AuthLayout from '@components/atoms/AuthLayout'
import BigIcon from '@components/molecules/BigIcon'
import services from '@services/index'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function EmailConfirmedSeo() {
  return <>
    <NextSeo
      title="Compte validé"
      noindex={true}
    />
  </>
}

export default function EmailConfirmed() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/auth/sign-in')
    }, 2500)
  }, [router])

  return (
    <AuthLayout
      title="Compte validé"
      helper={{
        label: `La page ne charge pas ? Se connecter`,
        href: '/auth/sign-in',
      }}
    >
      <EmailConfirmedSeo/>
      <BigIcon
        icon="check_circle"
        variant="success"
        description="Vous allez être redirigé sur la page de connexion"
      />
    </AuthLayout>
  )
}

export async function getServerSideProps(ctx) {
  await services({ isServer: true }).auth.helpers.shouldRedirectIfAuthenticated(
    ctx,
  )

  return { props: {} }
}
