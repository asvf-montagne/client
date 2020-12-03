import AuthLayout from '@components/atoms/AuthLayout'
import FormForgotPassword from '@components/organisms/Forms/FormForgotPassword'
import services from '@services/index'
import { NextSeo } from 'next-seo'
import React from 'react'

function ForgotPasswordSeo() {
  return <>
    <NextSeo
      title="Mot de passe oublié"
      description="Un oubli de mot de passe ? Vous pouvez le changer ici."
    />
  </>
}

export default function ForgotPassword() {
  return (
    <AuthLayout
      title="Mot de passe oublié ?"
      helper={{
        label: `La mémoire vous revient ? Se connecter`,
        href: '/auth/sign-in',
      }}
    >
      <ForgotPasswordSeo/>
      <FormForgotPassword />
    </AuthLayout>
  )
}

export async function getServerSideProps(ctx) {
  await services({ isServer: true }).auth.helpers.shouldRedirectIfAuthenticated(
    ctx,
  )

  return { props: {} }
}
