import Button from '@components/atoms/Button'
import FormSuccessOrError from '@components/atoms/FormSuccessOrError'
import Input from '@components/atoms/Input'
import FormHelper from '@helpers/form'
import ValidationHelper from '@helpers/validation'
import useServices from '@hooks/useServices'
import useUser from '@hooks/useUser'
import PropTypes from 'prop-types'
import React, { useRef, useState } from 'react'
import { Field, Form } from 'react-final-form'
import styles from './FormDashboardSettingsAccount.module.css'

FormDashboardSettingsAccount.propTypes = {
  user: PropTypes.object,
}

export default function FormDashboardSettingsAccount({ user = {} }) {
  const [success, setSuccess] = useState(false)
  const { setUser } = useUser()
  const { users } = useServices(null)
  const messageRef = useRef(null)

  const scrollToMessage = () => {
    if (messageRef.current)
      messageRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  async function handleSubmit(values) {
    const res = await FormHelper.fakeDelay(async () => {
      try {
        const updatedUser = users.validations.prepareUpdateUser(values)
        const res = await users.api.updateUser(updatedUser)
        if (res.status === 200) {
          setUser(res.data)
          setSuccess(true)
        } else {
          setSuccess(false)
          return ValidationHelper.validateFromBackend(res.data)
        }
      } catch (err) {
        console.error('error while submitting dashboard settings account', err)
      }
    })

    scrollToMessage()

    return res
  }

  return (
    <Form
      onSubmit={handleSubmit}
      validate={users.validations.updateUser}
      initialValues={{
        firstname: (user && user.firstname) || '',
        lastname: (user && user.lastname) || '',
        username: (user && user.username) || '',
        phone: (user && user.phone) || '',
        email: (user && user.email) || '',
      }}
      render={({ submitError, handleSubmit, values, submitting }) => (
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <span className={styles.form_header}>
            <h1 className={styles.form_header_title}>
              Informations personnelles
            </h1>
            <div ref={messageRef}>
              <FormSuccessOrError
                success={success}
                error={submitError}
                successMessage={'Vos informations ont été mises à jour'}
              />
            </div>
          </span>

          <Field name="lastname" type="text">
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

          <Field name="firstname" type="text">
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
              onClick={() => handleSubmit(values)}
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
