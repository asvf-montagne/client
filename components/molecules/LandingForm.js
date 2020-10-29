import { useRef } from 'react';
import Input from '@components/atoms/Input';
import Button from '@components/atoms/Button';
import styles from './LandingForm.module.css';

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
              event.preventDefault()
              if (event.keyCode === 13) {
                refEmail.current.focus()
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
              event.preventDefault()
              if (event.keyCode === 13) {
                refMessage.current.focus()
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
              event.preventDefault()
              if (event.keyCode === 13) {
                onSubmit(event)
              }
            }}
          />
          <Button onClick={onSubmit} type="primary" style={{ marginLeft: 'auto' }}>
            Envoyer le message
          </Button>
        </form>
      </div>
    </div>
  )
}