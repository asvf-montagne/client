import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Input from '@components/atoms/Input';
import Button from '@components/atoms/Button';
import styles from './ContactForm.module.css';
import { contactFormSubmissions } from "../../services/contact-form-submissions";
import services from "../../services";
import Badge from "@components/atoms/Badge";
import Icon from "@material-ui/core/Icon";
import { Field, Form } from 'react-final-form'
import { FormUtil } from "../../util/form";
import arrayMutators from 'final-form-arrays'
import UploadImageInput from "@components/organisms/UploadImageInput";

ContactForm.propTypes = {
  position: PropTypes.oneOf(['right', 'center']),
};

function DisplaySuccessOrError({ success, error }) {
  return <div style={{ alignItems: "flex-start", display: "flex", marginBottom: "20px" }}>
    {success &&
    <Badge color="green">
      <Icon>check_circle</Icon>
      <p className={styles.landingContact__overlay__contacts__colorParagraph}>Votre message a été
        envoyé.</p>
    </Badge>
    }

    {error && <Badge color="red">
      <Icon>cancel</Icon>
      <p className={styles.landingContact__overlay__contacts__colorParagraph}>{error}</p>
    </Badge>
    }
  </div>;
}

export default function ContactForm({ position = 'right' }) {
  const [success, setSuccess] = useState(false)


  const refFullName = useRef(null);
  const refEmail = useRef(null);
  const refContent = useRef(null);


  async function onSubmit(values, form) {
    const data = contactFormSubmissions.prepareForCreate(values)

    try {
      await services().contactFormSubmissions.create(data)
      setSuccess(true)

      FormUtil.reset(values, form)
    } catch (error) {
      console.error("error on submitting contact form", error)
      return contactFormSubmissions.createResponseToError(error)
    }
  }


  return (
    <div
      className={position === 'right' ? styles.landingContact__overlay__contacts__col : styles.landingContact__overlay__contacts__center}>
      <div className={styles.landingContact__overlay__contacts__col__inner__form}>

        <Form
          onSubmit={onSubmit}
          validate={contactFormSubmissions.validate}
          render={({ submitError, handleSubmit, values, form }) =>
            <form className={`
              ${styles.landingContact__overlay__contacts__col__form}
              ${position === 'right' ? styles.landingContact__overlay__contacts__col__formRight : ''}
            `}>

              {(success || submitError) && <DisplaySuccessOrError success={success} error={submitError}/>}

              <Field name="full_name">
                {({ input, meta }) => (
                  <Input ref={refFullName} icon="person" label="Nom et prénom" placeholder="Jonh Doe"
                         onKeyDown={e => FormUtil.navigateToNextInput(e, refEmail, 13)}
                         {...input}
                         meta={meta}/>
                )}
              </Field>

              <Field name="email">
                {({ input, meta }) => (
                  <Input ref={refEmail} icon="mail" label="Email" placeholder="Jonh Doe" {...input}
                         onKeyDown={e => FormUtil.navigateToNextInput(e, refContent, 13)}
                         meta={meta}/>
                )}
              </Field>

              <Field name="content" type="text">
                {({ input, meta }) => (
                  <Input ref={refContent} label="Nom et prénom" placeholder="Jonh Doe" textArea {...input}
                         onKeyDown={() => {}}
                         meta={meta}/>
                )}
              </Field>

              <Button onClick={() => handleSubmit(values, form)} size="medium" variant="primary"
                      focus="primary"
                      style={{ marginLeft: 'auto' }}>
                Envoyer le message
              </Button>
            </form>
          }
        />
      </div>
    </div>
  )
}
