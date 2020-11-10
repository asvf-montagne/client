import React, { useRef, useState } from 'react'
import { Field, Form } from 'react-final-form'
import Input from '@components/atoms/Input'
import Button from '@components/atoms/Button'
import DisplaySuccessOrError from '@components/atoms/FormSuccessOrError'
import { contactFormSubmissions } from '../../services/contact-form-submissions'
import services from '../../services'
import { FormUtil } from '../../util/form'
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const [success, setSuccess] = useState(false)

  const refFullName = useRef(null)
  const refEmail = useRef(null)
  const refContent = useRef(null)

  async function onSubmit(values, form) {
    const data = contactFormSubmissions.prepareForCreate(values)

    try {
      await services().contactFormSubmissions.create(data)
      setSuccess(true)

      FormUtil.reset(values, form)
    } catch (error) {
      console.error('error on submitting contact form', error)
      return contactFormSubmissions.validateFromBackend(error)
    }
  }

  return (
    <div className={styles.landingContact__overlay__contacts__col}>
      <div
        className={styles.landingContact__overlay__contacts__col__inner__form}
      >
        <Form
          onSubmit={onSubmit}
          validate={contactFormSubmissions.validate}
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
                      FormUtil.navigateToNextInput(e, refEmail, 13)
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
                      FormUtil.navigateToNextInput(e, refContent, 13)
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
