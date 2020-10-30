import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Button from "@components/atoms/Button";
import Input from '@components/atoms/Input';
import styles from './FormForgotPassword.module.css';

FormForgotPassword.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default function FormForgotPassword({ email, setEmail, onSubmit }) {
  const refEmail = useRef(null)

  useEffect(() => {
    refEmail.current.focus();
  }, []);

  return (
    <form className={styles.signUpForm}>
      <Input
        autocomplete="email"
        label="Email"
        placeholder="jonhdoe@example.com"
        ref={refEmail}
        value={email}
        onKeyDown={(event) => {
          event.preventDefault()
          if (event.keyCode === 13) {
            onSubmit(event)
          }
        }}
        onChange={(event) => setEmail(event.target.value)}
        icon="mail"
      />

      <div className={styles.signUpForm__authGroup}>
        <Button type="primary" fluid onClick={(event) => onSubmit(event)}>
          Envoyer
        </Button>
      </div>
    </form>
  );
}
