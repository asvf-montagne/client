import AuthLayout from '@components/atoms/AuthLayout'
import FormForgotPassword from '@components/organisms/FormForgotPassword'
import React from 'react'

export default function ForgotPassword() {
  return (
    <AuthLayout
      title="Mot de passe oublié ?"
      helper={{
        label: `La mémoire vous revient ? Se connecter`,
        href: '/auth/sign-in',
      }}
    >
      <FormForgotPassword />
    </AuthLayout>
  )
}
