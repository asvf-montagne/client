import React, { useState } from 'react'
import AuthLayout from '@components/atoms/AuthLayout'
import FormNewPassword from '@components/organisms/FormNewPassword'

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
      <FormNewPassword
        passwordConfirm={passwordConfirm}
        setPasswordConfirm={setPasswordConfirm}
        password={password}
        setPassword={setPassword}
        onSubmit={handleSubmit}
      />
    </AuthLayout>
  )
}
