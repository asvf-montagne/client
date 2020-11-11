import AuthLayout from '@components/atoms/AuthLayout'
import FormSignUp from '@components/organisms/FormSignUp'
import React from 'react'

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
