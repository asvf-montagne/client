import React, { useEffect, useRef } from 'react'
import Input from '@components/atoms/Input'
import styles from './FormSignIn.module.css'
import { Field, Form } from 'react-final-form'
import Button from '@components/atoms/Button'
import GoogleLogoAsset from '@assets/images/logo_google.png'
import services from '../../services'
import { Users } from '../../services/users'
import FormSuccessOrError from '@components/atoms/FormSuccessOrError'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { FormUtil } from '../../helpers/form'

FormSignIn.propTypes = {
  onSignInSuccess: PropTypes.func,
}

export default function FormSignIn({ onSignInSuccess }) {
  const router = useRouter()

  const refIdentifier = useRef(null)
  const refPassword = useRef(null)

  async function onSubmit(values) {
    try {
      const res = await services().users.signIn(values)

      if (res.status === 200) {
        const { jwt: token, user } = res.data
        services({ token }).auth.login()
        onSignInSuccess(user)
        await router.push('/protected-example')
      } else {
        return Users.validateFromBackend(res)
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
      onSubmit={onSubmit}
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
                  FormUtil.navigateToNextInput(e, refPassword, 13)
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
                  FormUtil.withKeyCode(e, 13, () => handleSubmit(values))
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
              onClick={(event) => onSubmit(event)}
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
