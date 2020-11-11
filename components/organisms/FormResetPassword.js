import Button from '@components/atoms/Button'
import DisplaySuccessOrError from '@components/atoms/FormSuccessOrError'
import Input from '@components/atoms/Input'
import FormHelper from '@helpers/form'
import ValidationHelper from '@helpers/validation'
import useServices from '@hooks/useServices'
import React, { useEffect, useRef, useState } from 'react'
import { Field, Form } from 'react-final-form'
import styles from './FormNewPassword.module.css'

export default function FormResetPassword({}) {
  const { auth } = useServices()
  const [success, setSuccess] = useState(false)
  const refPassword = useRef(null)
  const refPasswordConfirm = useRef(null)

  function getCode() {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get('code')
  }

  async function handleSubmit(values, form) {
    try {
      const res = await auth.api.resetPassword({ ...values, code: getCode() })
      if (res.status === 200) {
        FormHelper.reset(values, form)
        setSuccess(true)
      } else {
        return ValidationHelper.validateFromBackend(res.data)
      }
    } catch (error) {
      console.error('error while submitting reset password form', error)
    }
  }

  useEffect(() => {
    refPassword.current.focus()
  }, [])

  return (
    <Form
      onSubmit={handleSubmit}
      validate={auth.validations.resetPassword}
      render={({ handleSubmit, values, submitError, form }) => (
        <form className={styles.signUpForm}>
          <DisplaySuccessOrError
            success={success}
            error={submitError}
            successMessage={
              'Mot de passe changé. Vous pouvez maintenant vous connecter'
            }
          />

          <Field name="password" type="password">
            {({ input, meta }) => (
              <Input
                label="Nouveau mot de passe"
                ref={refPassword}
                {...input}
                meta={meta}
                onKeyDown={(e) =>
                  FormHelper.navigateToNextInput(e, refPasswordConfirm, 13)
                }
                icon="lock"
              />
            )}
          </Field>

          <Field name="passwordConfirmation" type="password">
            {({ input, meta }) => (
              <Input
                label="Confirmation du mot de passe"
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
              onClick={() => handleSubmit(values, form)}
            >
              Changer le mot de passe
            </Button>
          </div>
        </form>
      )}
    />
  )
}
