import GoogleLogoAsset from '@assets/images/logo_google.png'
import Button from '@components/atoms/Button'
import FormSuccessOrError from '@components/atoms/FormSuccessOrError'
import Input from '@components/atoms/Input'
import FormHelper from '@helpers/form'
import TokenHelper from '@helpers/token'
import ValidationHelper from '@helpers/validation'
import useServices from '@hooks/useServices'
import useUser from '@hooks/useUser'
import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'
import { Field, Form } from 'react-final-form'
import styles from './FormSignIn.module.css'

export default function FormSignIn({}) {
  const { setUser } = useUser()
  const { auth } = useServices()
  const router = useRouter()

  const refIdentifier = useRef(null)
  const refPassword = useRef(null)

  async function handleSubmit(values) {
    try {
      const res = await auth.api.signIn(values)

      if (res.status === 200) {
        const { jwt: token, user } = res.data

        TokenHelper.setToken(token)
        setUser(user)

        await router.push('/')
      } else {
        return ValidationHelper.validateFromBackend(res.data)
      }
    } catch (error) {
      console.error('error while submitting sign up form', error)
    }
  }

  useEffect(() => {
    refIdentifier.current.focus()
  }, [])

  return (
    <Form
      onSubmit={handleSubmit}
      validate={auth.validations.signIn}
      render={({ submitError, handleSubmit, values }) => (
        <form className={styles.signUpForm}>
          <FormSuccessOrError
            success={false}
            error={submitError}
            successMessage={''}
          />

          <Field name="identifier" type="text">
            {({ input, meta }) => (
              <Input
                label="Nom d'utilisateur ou email"
                placeholder="jonhdoe@example.com ou john.doe"
                ref={refIdentifier}
                {...input}
                meta={meta}
                icon="person"
                onKeyDown={(e) =>
                  FormHelper.navigateToNextInput(e, refPassword, 13)
                }
              />
            )}
          </Field>

          <Field name="password" type="password">
            {({ input, meta }) => (
              <Input
                autocomplete="current-password"
                label="Mot de passe"
                placeholder="Votre mot de passe"
                ref={refPassword}
                {...input}
                meta={meta}
                onKeyDown={(e) =>
                  FormHelper.withKeyCode(e, 13, () => handleSubmit(values))
                }
                icon="lock"
              />
            )}
          </Field>

          <div className={styles.signUpForm__authGroup}>
            <Button
              variant="primary"
              size="large"
              focus="primary"
              fluid
              onClick={() => handleSubmit(values)}
            >
              Connexion
            </Button>

            <p className={styles.signUpForm__authGroup__separator}>
              Ou bien se connecter avec
            </p>

            <Button
              variant="light"
              size="large"
              focus="primary"
              fluid
              onClick={(event) => handleSubmit(event)}
            >
              <img
                alt="auth-google"
                src={GoogleLogoAsset}
                className={styles.signUpForm__authGroup__googleImg}
              />
              Google
            </Button>
          </div>
        </form>
      )}
    />
  )
}
