import { useRef } from 'react';
import PropTypes from 'prop-types';
import Input from '@components/atoms/Input';
import Button from '@components/atoms/Button';
import styles from './LandingForm.module.css';

LandingForm.propTypes = {
  position: PropTypes.oneOf(['right', 'center']),
  fullName: PropTypes.string.isRequired,
  setFullName: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  setMessage: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default function LandingForm({ position = 'right', fullName, setFullName, email, setEmail, message, setMessage, onSubmit }) {
  const refFullName = useRef(null);
  const refEmail = useRef(null);
  const refMessage = useRef(null);

  return (
    <div className={position === 'right' ? styles.landingContact__overlay__contacts__col : styles.landingContact__overlay__contacts__center}>
      <div className={styles.landingContact__overlay__contacts__col__inner__form}>

        <form className={`
          ${styles.landingContact__overlay__contacts__col__form}
          ${position === 'right' ? styles.landingContact__overlay__contacts__col__formRight : ''}
        `}>
          <Input
            label="Nom et prénom"
            placeholder="Jonh Doe"
            ref={refFullName}
            value={fullName}
            onChange={setFullName}
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                refEmail.current.focus()
                event.preventDefault()
              }
            }}
            icon="person_outline"
          />
          <Input
            label="Email"
            placeholder="jonhdoe@example.com"
            ref={refEmail}
            value={email}
            onChange={setEmail}
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                refMessage.current.focus()
                event.preventDefault()
              }
            }}
            icon="mail"
          />
          <Input
            textArea
            label="Message"
            placeholder="Un super message pour l’asvf montagne !"
            ref={refMessage}
            value={message}
            onChange={setMessage}
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                onSubmit(event)
              }
            }}
          />
          <Button onClick={onSubmit} type="primary" focus="primary" style={{ marginLeft: 'auto' }}>
            Envoyer le message
          </Button>
        </form>
      </div>
    </div>
  )
}