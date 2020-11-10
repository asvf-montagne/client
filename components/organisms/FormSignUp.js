import React, { useEffect, useRef } from 'react'
import Button from '@components/atoms/Button'
import Input from '@components/atoms/Input'
import styles from './FormSignIn.module.css'

import GoogleLogoAsset from '@assets/images/logo_google.png'
import { Field, Form } from 'react-final-form'
import { FormUtil } from '../../util/form'
import { Users } from '../../services/users'
import services from '../../services'
import { useRouter } from 'next/router'
import DisplaySuccessOrError from '@components/atoms/FormSuccessOrError'

export default function FormSignUp({}) {
  const router = useRouter()

  const refUsername = useRef(null)
  const refEmail = useRef(null)
  const refPassword = useRef(null)

  async function onSubmit(values) {
    try {
      const res = await services().users.signUp(values)

      if (res.status === 200) {
        await router.push('/auth/email-sent')
      } else {
        return Users.validateFromBackendSignUp(res)
      }
    } catch (error) {
      console.error('error while submitting sign up form', error)
    }
  }

  useEffect(() => {
    refUsername.current.focus()
  }, [])

  return (
    <Form
      validate={Users.validateSignUp}
      onSubmit={onSubmit}
      render={({ submitError, handleSubmit, values }) => (
        <form className={styles.signUpForm}>
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
                onKeyDown={(e) => FormUtil.navigateToNextInput(e, refEmail, 13)}
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
                  FormUtil.navigateToNextInput(e, refPassword, 13)
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
                  FormUtil.withKeyCode(e, 13, () => handleSubmit(values))
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
              onClick={() => console.log('todo: go to goodle')}
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
