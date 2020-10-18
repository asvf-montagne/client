import React from 'react'
import { useRouter } from 'next/router'
import AuthLayout from '../../components/organisms/AuthLayout'
import AuthState from "../../components/organisms/AuthState";

function Verify() {
  const router = useRouter()
  const { token } = router.query

  return (
    <AuthLayout
      title="Compte validé"
      helper={{
        title: 'La page ne charge pas ? Se connecter',
        ref: '/login'
      }}
    >
      <AuthState
        icon="check"
        description="Vous allez être redirigé sur la page de connexion"
      />
    </AuthLayout>
  )
}

export default Verify
