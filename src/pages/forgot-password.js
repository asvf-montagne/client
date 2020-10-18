import React, { useState } from 'react'
import AuthLayout from '../components/organisms/AuthLayout'
import FormForgotPassword from '../components/organisms/FormForgotPassword'

function Register() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(email)
  }

  return (
    <AuthLayout
      title="Mot de passe oublié ?"
      helper={{
        title: 'La mémoire vous revient ? Se connecter',
        ref: '/login'
      }}
    >
      <FormForgotPassword
        email={email}
        setEmail={setEmail}
        onSubmit={handleSubmit}
      />
    </AuthLayout>
  )
}

export default Register
