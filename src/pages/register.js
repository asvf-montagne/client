import React, { useState } from 'react'
import AuthLayout from '../components/organisms/AuthLayout'
import FormRegister from '../components/organisms/FormRegister'

function Register() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(fullName, email, password)
  }

  return (
    <AuthLayout
      title="S’inscrire"
      helper={{
        title: 'Vous avez déjà un compte ?',
        ref: '/login'
      }}
    >
      <FormRegister
        fullName={fullName}
        setFullName={setFullName}
        password={password}
        setPassword={setPassword}
        email={email}
        setEmail={setEmail}
        onSubmit={handleSubmit}
      />
    </AuthLayout>
  )
}

export default Register
