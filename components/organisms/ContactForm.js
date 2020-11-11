import Button from '@components/atoms/Button'
import DisplaySuccessOrError from '@components/atoms/FormSuccessOrError'
import Input from '@components/atoms/Input'
import FormHelper from '@helpers/form'
import ValidationHelper from '@helpers/validation'
import useServices from '@hooks/useServices'
import React, { useRef, useState } from 'react'
import { Field, Form } from 'react-final-form'
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const [success, setSuccess] = useState(false)
  const { contactFormSubmissions } = useServices()

  const refFullName = useRef(null)
  const refEmail = useRef(null)
  const refContent = useRef(null)

  async function onSubmit(values, form) {
    try {
      const data = contactFormSubmissions.validations.prepareCreate(values)
      const res = await contactFormSubmissions.api.create(data)

      if (res.status === 200) {
        setSuccess(true)
        FormHelper.reset(values, form)
      } else {
        return ValidationHelper.validateFromBackend(res.data)
      }
    } catch (error) {
      console.log('error while submiting contact form', error)
    }
  }

  return (
    <div className={styles.landingContact__overlay__contacts__col}>
      <div
        className={styles.landingContact__overlay__contacts__col__inner__form}
      >
        <Form
          onSubmit={onSubmit}
          validate={contactFormSubmissions.validations.validateCreate}
          render={({ submitError, handleSubmit, values, form }) => (
            <form
              className={`
              ${styles.landingContact__overlay__contacts__col__form}
            `}
            >
              <DisplaySuccessOrError
                success={success}
                successMessage={'Votre message a été envoyé'}
                error={submitError}
              />

              <Field name="full_name">
                {({ input, meta }) => (
                  <Input
                    ref={refFullName}
                    icon="person"
                    label="Nom et prénom"
                    placeholder="Jonh Doe"
                    onKeyDown={(e) =>
                      FormHelper.navigateToNextInput(e, refEmail, 13)
                    }
                    {...input}
                    meta={meta}
                  />
                )}
              </Field>

              <Field name="email">
                {({ input, meta }) => (
                  <Input
                    ref={refEmail}
                    icon="mail"
                    label="Email"
                    placeholder="Jonh Doe"
                    {...input}
                    onKeyDown={(e) =>
                      FormHelper.navigateToNextInput(e, refContent, 13)
                    }
                    meta={meta}
                  />
                )}
              </Field>

              <Field name="content" type="text">
                {({ input, meta }) => (
                  <Input
                    ref={refContent}
                    label="Nom et prénom"
                    placeholder="Jonh Doe"
                    textArea
                    {...input}
                    onKeyDown={() => {}}
                    meta={meta}
                  />
                )}
              </Field>

              <Button
                onClick={() => handleSubmit(values, form)}
                size="medium"
                variant="primary"
                focus="primary"
                style={{ marginLeft: 'auto' }}
              >
                Envoyer le message
              </Button>
            </form>
          )}
        />
      </div>
    </div>
  )
}
