import AuthLayout from '@components/atoms/AuthLayout'
import BigIcon from '@components/molecules/BigIcon'
import services from '@services/index'
import React from 'react'

export default function EmailSent() {
  return (
    <AuthLayout
      title="Bientôt terminé !"
      helper={{ label: `Se connecter`, href: '/auth/sign-in' }}
    >
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
