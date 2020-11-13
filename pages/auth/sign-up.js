import AuthLayout from '@components/atoms/AuthLayout'
import FormSignUp from '@components/organisms/FormSignUp'
import services from '@services/index'
import React from 'react'

export default function SignUp() {

  return (
    <AuthLayout
      title="S'inscrire"
      helper={{ label: `Vous avez déjà un compte ?`, href: '/auth/sign-in' }}
    >
      <FormSignUp/>
    </AuthLayout>
  )
}

export async function getServerSideProps(ctx) {
  await services({ isServer: true }).auth.helpers.shouldRedirectIfAuthenticated(ctx)

  return { props: {} }
}
