import AuthLayout from '@components/atoms/AuthLayout'
import BigIcon from '@components/molecules/BigIcon'
import FormHelper from '@helpers/form'
import TokenHelper from '@helpers/token'
import useUser from '@hooks/useUser'
import services from '@services/index'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function GoogleCallback() {
  const { setUser } = useUser()
  const router = useRouter()
  const [err, setErr] = useState(false)

  function getAccessToken() {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get('access_token')
  }

  useEffect(() => {
    FormHelper.fakeDelay(() =>
      services().auth.api.signInWithGoogleProvider(getAccessToken()),
    )
      .then(({ status, data }) => {
        if (status !== 200) {
          setErr(true)
          return
        }

        const { jwt: token, user } = data

        TokenHelper.setToken(token)
        setUser(user)

        return router.push('/')
      })
      .catch((err) =>
        console.error('unable to get account from this provider', err),
      )
  }, [router])

  return (
    <AuthLayout
      title="Chargement du compte"
      helper={{
        label: `La page ne charge pas ? Se connecter`,
        href: '/auth/sign-in',
      }}
    >
      <BigIcon
        icon={err ? 'cancel' : 'check_circle'}
        variant={err ? 'error' : 'success'}
        description={
          err
            ? "Impossible d'utiliser votre compte google. Réessayez plus tard."
            : "Vous allez être redirigé sur la page d'accueil"
        }
      />
    </AuthLayout>
  )
}
