import AuthLayout from '@components/atoms/AuthLayout'
import FormSignIn from '@components/organisms/FormSignIn'
import useUser from '@hooks/useUser'
import React from 'react'

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
      <FormSignIn onSignInSuccess={handleSignInSuccess} />
    </AuthLayout>
  )
}
