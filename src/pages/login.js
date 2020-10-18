import React, { useState } from 'react'
import AuthLayout from '../components/organisms/AuthLayout'
import FormLogin from '../components/organisms/FormLogin'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(email, password)
  }

  return (
    <AuthLayout
      title="Se connecter"
      helper={{
        title: 'Vous n’avez pas de compte ?',
        ref: '/register'
      }}
    >
      <FormLogin
        password={password}
        setPassword={setPassword}
        email={email}
        setEmail={setEmail}
        onSubmit={handleSubmit}
        onGoogleSubmit={handleSubmit}
      />
    </AuthLayout>
  )
}

export default Login
