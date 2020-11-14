import Button from '@components/atoms/Button'
import FormSuccessOrError from '@components/atoms/FormSuccessOrError'
import Input from '@components/atoms/Input'
import FormHelper from '@helpers/form'
import ValidationHelper from '@helpers/validation'
import useServices from '@hooks/useServices'
import React, { useState } from 'react'
import { Field, Form } from 'react-final-form'
import styles from './FormDashboardSettingsAccount.module.css'

export default function FormDashboardSettingsPassword() {
  const [success, setSuccess] = useState(false)
  const { auth } = useServices()

  async function handleSubmit(values, form) {
    try {
      const res = await FormHelper.fakeDelay(async () =>
        auth.api.updatePassword(values),
      )
      if (res.status === 200) {
        setSuccess(true)
        FormHelper.reset(values, form)
      } else {
        return ValidationHelper.validateFromBackend(res.data)
      }
    } catch (error) {
      console.error(
        'error while submitting dashboard setting password change',
        error,
      )
    }
  }

  return (
    <Form
      onSubmit={handleSubmit}
      validate={auth.validations.updatePassword}
      render={({ submitError, handleSubmit, values, submitting }) => (
        <form className={styles.form}>
          <span className={styles.form_header}>
            <h1 className={styles.form_header_title}>
              Sécurité de votre compte
            </h1>
            <FormSuccessOrError
              success={success}
              error={submitError}
              successMessage={'Votre mot de passe a été changé'}
            />
          </span>

          <Field name="password" type="password">
            {({ input, meta }) => (
              <div className={styles.wideInput}>
                <div className={styles.wideInput_col}>
                  <label className={styles.wideInput_col_label}>
                    Changer votre mot de passe
                  </label>
                  <p className={styles.wideInput_col_description}>
                    Il est recommandé d’utiliser un gestionnaire de mot de
                    passe.
                  </p>
                </div>
                <Input
                  {...input}
                  placeholder="********"
                  meta={meta}
                  icon="lock"
                />
              </div>
            )}
          </Field>

          <span className={styles.form_footer}>
            <Button
              size="medium"
              variant="primary"
              focus="primary"
              onClick={() => handleSubmit(values, values)}
              loading={submitting}
            >
              Changer le mot de passe
            </Button>
          </span>
        </form>
      )}
    />
  )
}
