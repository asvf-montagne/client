import AuthLayout from '@components/atoms/AuthLayout'
import FormSignUp from '@components/organisms/Forms/FormSignUp'
import services from '@services/index'
import { NextSeo } from 'next-seo'
import React from 'react'

function SignUpSeo() {
  return (
    <>
      <NextSeo
        title="S'inscrire"
        description="S'inscrire à l'asvf-montagne avec votre compte"
      />
    </>
  )
}

export default function SignUp() {
  return (
    <AuthLayout
      title="S'inscrire"
      helper={{ label: `Vous avez déjà un compte ?`, href: '/auth/sign-in' }}
    >
      <FormSignUp />
    </AuthLayout>
  )
}

export async function getServerSideProps(ctx) {
  await services({ isServer: true }).auth.helpers.shouldRedirectIfAuthenticated(
    ctx,
  )

  return { props: {} }
}
