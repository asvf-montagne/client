import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Input from '@components/atoms/Input';
import Button from '@components/atoms/Button';
import styles from './ContactForm.module.css';
import { useField, useForm } from 'react-final-form-hooks'
import { contactFormSubmissions } from "../../services/contact-form-submissions";
import services from "../../services";
import Badge from "@components/atoms/Badge";
import Icon from "@material-ui/core/Icon";

ContactForm.propTypes = {
  position: PropTypes.oneOf(['right', 'center']),
};

export default function ContactForm({ position = 'right' }) {
  const [success, setSuccess] = useState(false)

  const refFullName = useRef(null);
  const refEmail = useRef(null);
  const refMessage = useRef(null);

  async function onSubmit(values) {
    const data = contactFormSubmissions.prepareForCreate(values)

    try {
      await services().contactFormSubmissions.create(data)
      setSuccess(true)
    } catch (error) {
      return contactFormSubmissions.createResponseToError(error)
    }
  }

  const { form, handleSubmit, submitError } = useForm({
    onSubmit,
    validate: contactFormSubmissions.validate
  })

  const fullName = useField('full_name', form)
  const email = useField('email', form)
  const content = useField('content', form)

  useEffect(() => {
    if (success) {
      form.pauseValidation()
      form.restart()
      form.resumeValidation()
    }
  }, [success])

  return (
    <div
      className={position === 'right' ? styles.landingContact__overlay__contacts__col : styles.landingContact__overlay__contacts__center}>
      <div className={styles.landingContact__overlay__contacts__col__inner__form}>

        <form className={`
          ${styles.landingContact__overlay__contacts__col__form}
          ${position === 'right' ? styles.landingContact__overlay__contacts__col__formRight : ''}
        `}>

          {(success || submitError) && (
            <div style={{ alignItems: "flex-start", display: "flex", marginBottom: "20px" }}>
              {success &&
              <Badge color="green">
                <Icon>check_circle</Icon>
                <p className={styles.landingContact__overlay__contacts__colorParagraph}>Votre message a été envoyé.</p>
              </Badge>
              }

              {submitError && <Badge color="red">
                <Icon>cancel</Icon>
                <p className={styles.landingContact__overlay__contacts__colorParagraph}>{submitError}</p>
              </Badge>
              }
            </div>
          )}

          <Input
            label="Nom et prénom"
            placeholder="Jonh Doe"
            ref={refFullName}
            value={fullName.input.value}
            onChange={fullName.input.onChange}
            onBlur={fullName.input.onBlur}
            onFocus={fullName.input.onFocus}
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                refEmail.current.focus()
                event.preventDefault()
              }
            }}
            meta={fullName.meta}
            icon="person"
          />
          <Input
            label="Email"
            placeholder="jonhdoe@example.com"
            ref={refEmail}
            value={email.input.value}
            onChange={email.input.onChange}
            onBlur={email.input.onBlur}
            onFocus={email.input.onFocus}
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                refMessage.current.focus()
                event.preventDefault()
              }
            }}
            meta={email.meta}
            icon="mail"
          />
          <Input
            textArea
            label="Message"
            placeholder="Un super message pour l’asvf montagne !"
            ref={refMessage}
            value={content.input.value}
            onChange={content.input.onChange}
            onBlur={content.input.onBlur}
            onFocus={content.input.onFocus}
            onKeyDown={() => {
            }}
            meta={content.meta}
          />
          <Button onClick={handleSubmit} size="medium" variant="primary" focus="primary" style={{ marginLeft: 'auto' }}>
            Envoyer le message
          </Button>
        </form>
      </div>
    </div>
  )
}
