import AuthLayout from '@components/atoms/AuthLayout'
import FormSignIn from '@components/organisms/Forms/FormSignIn'
import useUser from '@hooks/useUser'
import services from '@services/index'
import { NextSeo } from 'next-seo'
import React from 'react'

function SignInSeo() {
  return (
    <>
      <NextSeo
        title="Se connecter"
        description="Se connecter à l'asvf-montagne avec votre compte"
      />
    </>
  )
}

export default function SignIn() {
  const { mutate } = useUser()

  const handleSignInSuccess = (user) => {
    mutate(user)
  }

  return (
    <AuthLayout
      title="Se connecter"
      helper={{ label: `Vous n'avez pas de compte ?`, href: '/auth/sign-up' }}
    >
      <SignInSeo />
      <FormSignIn onSignInSuccess={handleSignInSuccess} />
    </AuthLayout>
  )
}

export async function getServerSideProps(ctx) {
  await services({ isServer: true }).auth.helpers.shouldRedirectIfAuthenticated(
    ctx,
  )

  return { props: {} }
}
