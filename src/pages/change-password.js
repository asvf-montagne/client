import React, { useState } from 'react'
import AuthLayout from '../components/organisms/AuthLayout'
import FormChangePassword from '../components/organisms/FormChangePassword'

function ChangePassword() {
  const [confirmPassword, setConfirmPassword] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(password, confirmPassword)
  }

  return (
    <AuthLayout
      title="Un oublis ?"
      helper={{
        title: 'La mémoire vous revient ? Se connecter',
        ref: '/login'
      }}
    >
      <FormChangePassword
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        onSubmit={handleSubmit}
      />
    </AuthLayout>
  )
}

export default ChangePassword
