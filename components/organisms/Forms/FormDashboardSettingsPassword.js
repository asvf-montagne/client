import React from 'react'
import { Field, Form } from 'react-final-form'
import Button from '@components/atoms/Button'
import Input from '@components/atoms/Input'
import FormSuccessOrError from '@components/atoms/FormSuccessOrError'
import styles from './FormDashboardSettingsAccount.module.css'

export default function FormDashboardSettingsPassword() {
  function handleSubmit(values) {
    try {
      console.log('wewewe', values)
    } catch (error) {
      console.error('error while submitting sign up form', error)
    }
  }

  return (
    <Form
      onSubmit={handleSubmit}
      validate={null}
      render={({ submitError, handleSubmit, values, pristine, submitting }) => (
        <form className={styles.form}>
          <span className={styles.form_header}>
            <h1 className={styles.form_header_title}>
              Sécurité de votre compte
            </h1>
            <FormSuccessOrError
              success={false}
              error={submitError}
              successMessage={''}
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
              onClick={handleSubmit}
              loading={submitting}
            >
              Sauvegarder
            </Button>
          </span>
        </form>
      )}
    />
  )
}
