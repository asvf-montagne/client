import AuthLayout from '@components/atoms/AuthLayout'
import FormResetPassword from '@components/organisms/Forms/FormResetPassword'
import services from '@services/index'
import { NextSeo } from 'next-seo'
import React, { useState } from 'react'

function GoogleCallbackSeo() {
  return (
    <>
      <NextSeo title="Changez votre mot de passe" noindex={true} />
    </>
  )
}

export default function NewPassword() {
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const handleSubmit = () => {
    console.log(password, passwordConfirm)
  }

  return (
    <AuthLayout
      title="Nouveau mot de passe"
      helper={{ label: `Vous avez déjà un compte ?`, href: '/sign-in' }}
    >
      <FormResetPassword
        passwordConfirm={passwordConfirm}
        setPasswordConfirm={setPasswordConfirm}
        password={password}
        setPassword={setPassword}
        onSubmit={handleSubmit}
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
