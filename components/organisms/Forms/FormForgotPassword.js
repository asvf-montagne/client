import Button from '@components/atoms/Button'
import DisplaySuccessOrError from '@components/atoms/FormSuccessOrError'
import Input from '@components/atoms/Input'
import FormHelper from '@helpers/form'
import ValidationHelper from '@helpers/validation'
import useServices from '@hooks/useServices'
import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'
import { Field, Form } from 'react-final-form'
import styles from './FormForgotPassword.module.css'

export default function FormForgotPassword({}) {
  const { auth } = useServices()
  const router = useRouter()
  const refEmail = useRef(null)

  async function handleSubmit(values) {
    try {
      const res = await auth.api.forgotPassword(values)

      console.log(res)

      if (res.status === 200) {
        router.push('/auth/forgot-password-email-sent')
      } else {
        return ValidationHelper.validateFromBackend(res.data)
      }
    } catch (error) {
      console.error('error while submitting forgot password form', error)
    }
  }

  useEffect(() => {
    refEmail.current.focus()
  }, [])

  return (
    <Form
      onSubmit={handleSubmit}
      validate={auth.validations.forgotPassword}
      render={({ submitError, values, handleSubmit, pristine, submitting }) => (
        <form
          className={styles.signUpForm}
          onSubmit={(e) => e.preventDefault()}
        >
          <DisplaySuccessOrError
            success={false}
            error={submitError}
            successMessage=""
          />

          <Field name="email">
            {({ input, meta }) => (
              <Input
                autocomplete="email"
                label="Email de votre compte"
                placeholder="jonhdoe@example.com"
                ref={refEmail}
                onKeyDown={(e) =>
                  FormHelper.withKeyCode(e, 13, () => handleSubmit(values))
                }
                {...input}
                meta={meta}
                icon="mail"
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
              Envoyer
            </Button>
          </div>
        </form>
      )}
    />
  )
}
