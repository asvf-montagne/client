import React from 'react'
import PropTypes from 'prop-types'
import { Field, Form } from 'react-final-form'
import Button from '@components/atoms/Button'
import Input from '@components/atoms/Input'
import FormSuccessOrError from '@components/atoms/FormSuccessOrError'
import styles from './FormDashboardSettingsAccount.module.css'

FormDashboardSettingsAccount.propTypes = {
  user: PropTypes.object,
}

export default function FormDashboardSettingsAccount({ user = {} }) {
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
      initialValues={{
        firstName: (user && user.firstName) || '',
        lastName: (user && user.lastname) || '',
        username: (user && user.username) || '',
        phone: (user && user.phone) || '',
        email: (user && user.email) || '',
      }}
      render={({ submitError, handleSubmit, values, pristine, submitting }) => (
        <form className={styles.form}>
          <span className={styles.form_header}>
            <h1 className={styles.form_header_title}>
              Informations personnelles
            </h1>
            <FormSuccessOrError
              success={false}
              error={submitError}
              successMessage={''}
            />
          </span>

          <Field name="lastName" type="text">
            {({ input, meta }) => (
              <div className={styles.wideInput}>
                <div className={styles.wideInput_col}>
                  <label className={styles.wideInput_col_label}>Nom</label>
                  <p className={styles.wideInput_col_description}>
                    Votre nom est personel il ne sera pas affiché en public.
                  </p>
                </div>
                <Input
                  {...input}
                  placeholder="Nom de famille"
                  meta={meta}
                  icon="person"
                />
              </div>
            )}
          </Field>

          <Field name="firstName" type="text">
            {({ input, meta }) => (
              <div className={styles.wideInput}>
                <div className={styles.wideInput_col}>
                  <label className={styles.wideInput_col_label}>Prénom</label>
                  <p className={styles.wideInput_col_description}>
                    Le prénom est utilisé lorsque vous publiez des articles ou
                    sorties.
                  </p>
                </div>
                <Input
                  {...input}
                  placeholder="Prénom"
                  meta={meta}
                  icon="person"
                />
              </div>
            )}
          </Field>

          <Field name="username" type="text">
            {({ input, meta }) => (
              <div className={styles.wideInput}>
                <div className={styles.wideInput_col}>
                  <label className={styles.wideInput_col_label}>
                    Nom d’utilisateur
                  </label>
                  <p className={styles.wideInput_col_description}>
                    Le nom d’utilisateur est utilisé lorsque vous publiez des
                    commentaires.
                  </p>
                </div>
                <Input
                  {...input}
                  placeholder="Nom de compte"
                  meta={meta}
                  icon="person"
                />
              </div>
            )}
          </Field>

          <Field name="phone" type="text">
            {({ input, meta }) => (
              <div className={styles.wideInput}>
                <div className={styles.wideInput_col}>
                  <label className={styles.wideInput_col_label}>
                    Numéro de téléphone
                  </label>
                  <p className={styles.wideInput_col_description}>
                    Le numéro de téléphone est utilisé lorsque vous publiez des
                    sorties et que vous êtes responsable.
                  </p>
                </div>
                <Input
                  {...input}
                  placeholder="Numéro de téléphone"
                  meta={meta}
                  icon="phone"
                />
              </div>
            )}
          </Field>

          <Field name="email" type="text">
            {({ input, meta }) => (
              <div className={styles.wideInput}>
                <div className={styles.wideInput_col}>
                  <label className={styles.wideInput_col_label}>
                    Addresse email
                  </label>
                  <p className={styles.wideInput_col_description}>
                    L’addresse email est utilisé pour vous avertir d’évènements,
                    de changements lié au site ect. Elle reste privé.ue vous
                    publiez des
                  </p>
                </div>
                <Input
                  {...input}
                  disabled
                  placeholder="Email"
                  meta={meta}
                  icon="mail"
                />
              </div>
            )}
          </Field>

          <span className={styles.form_footer}>
            <Button
              size="medium"
              variant="primary"
              focus="primary"
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
