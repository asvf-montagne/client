import GoogleLogoAsset from '@assets/images/logo_google.png'
import Button from '@components/atoms/Button'
import DisplaySuccessOrError from '@components/atoms/FormSuccessOrError'
import Input from '@components/atoms/Input'
import baseURL from '@helpers/baseURL'
import FormHelper from '@helpers/form'
import ValidationHelper from '@helpers/validation'
import useServices from '@hooks/useServices'
import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'
import { Field, Form } from 'react-final-form'
import styles from './FormSignUp.module.css'

export default function FormSignUp({}) {
  const { auth } = useServices()
  const router = useRouter()

  const refUsername = useRef(null)
  const refEmail = useRef(null)
  const refPassword = useRef(null)

  async function handleSubmit(values) {
    try {
      const res = await auth.api.signUp(values)

      if (res.status === 200) {
        await router.push('/auth/sign-up-email-sent')
      } else {
        return ValidationHelper.validateFromBackend(res.data)
      }
    } catch (error) {
      console.error('error while submitting sign up form', error)
    }
  }

  // function registerWithGoogle() {
  //   console.log('REGISTER WITH GOOGLE')
  // }

  useEffect(() => {
    refUsername.current.focus()
  }, [])

  return (
    <Form
      validate={auth.validations.signUp}
      onSubmit={handleSubmit}
      render={({ submitError, handleSubmit, values, pristine, submitting }) => (
        <form
          className={styles.signUpForm}
          onSubmit={(e) => e.preventDefault()}
        >
          <DisplaySuccessOrError
            success={false}
            error={submitError}
            successMessage={''}
          />

          <Field name="username" type="text">
            {({ input, meta }) => (
              <Input
                ref={refUsername}
                icon="person"
                label="Nom d'utilisateur"
                placeholder="john.doe"
                onKeyDown={(e) =>
                  FormHelper.navigateToNextInput(e, refEmail, 13)
                }
                {...input}
                meta={meta}
              />
            )}
          </Field>

          <Field name="email" type="text">
            {({ input, meta }) => (
              <Input
                ref={refEmail}
                icon="mail"
                label="Email"
                placeholder="john.doe@gmail.com"
                onKeyDown={(e) =>
                  FormHelper.navigateToNextInput(e, refPassword, 13)
                }
                {...input}
                meta={meta}
              />
            )}
          </Field>

          <Field name="password" type="password">
            {({ input, meta }) => (
              <Input
                ref={refPassword}
                icon="lock"
                label="Mot de passe"
                placeholder="Choisissez un bon mot de passe"
                onKeyDown={(e) =>
                  FormHelper.withKeyCode(e, 13, () => handleSubmit(values))
                }
                {...input}
                meta={meta}
              />
            )}
          </Field>

          <div className={styles.signUpForm__authGroup}>
            <Button
              variant="primary"
              size="large"
              focus="primary"
              fluid
              loading={submitting}
              onClick={() => handleSubmit(values)}
            >
              S&apos;inscrire
            </Button>

            <p className={styles.signUpForm__authGroup__separator}>
              Ou bien se s&apos;inscrire avec
            </p>

            <Button
              variant="light"
              size="large"
              focus="primary"
              fluid
              onClick={() => router.push(`${baseURL}/connect/google/`)}
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
