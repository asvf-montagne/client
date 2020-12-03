import AuthLayout from '@components/atoms/AuthLayout'
import BigIcon from '@components/molecules/BigIcon'
import services from '@services/index'
import { NextSeo } from 'next-seo'
import React from 'react'

function EmailSentSeo() {
  return (
    <>
      <NextSeo title="Bientôt terminé !" noindex={true} />
    </>
  )
}

export default function EmailSent() {
  return (
    <AuthLayout
      title="Bientôt terminé !"
      helper={{ label: `Se connecter`, href: '/auth/sign-in' }}
    >
      <EmailSentSeo />
      <BigIcon
        icon="email"
        variant="primary"
        description="Cliquez sur le lien dans votre boîte mail pour réinitialiser votre mot de passe."
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
