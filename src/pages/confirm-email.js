import React from 'react'
import AuthLayout from '../components/organisms/AuthLayout'
import AuthState from '../components/organisms/AuthState'

function ConfirmEmail() {
  return (
    <AuthLayout
      title="Bientôt terminé"
      helper={{
        title: 'La page ne charge pas ? Se connecter',
        ref: '/login'
      }}
    >
      <AuthState
        icon="mail"
        description="Cliquez sur le lien dans votre boîte mail pour continuer."
      />
    </AuthLayout>
  )
}

export default ConfirmEmail
