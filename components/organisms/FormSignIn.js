import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Button from "@components/atoms/Button";
import Input from '@components/atoms/Input';
import styles from './FormSignIn.module.css';

import GoogleLogoAsset from '@assets/images/logo-google.png';

FormSignIn.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default function FormSignIn({ email, setEmail, password, setPassword, onSubmit }) {
  const refEmail = useRef(null)
  const refPassword = useRef(null)

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
            refPassword.current.focus()
          }
        }}
        onChange={(event) => setEmail(event.target.value)}
        icon="mail"
      />
      <Input
        autocomplete="current-password"
        type="password"
        label="Mot de passe"
        placeholder="password"
        ref={refPassword}
        value={password}
        onKeyDown={(event) => {
          event.preventDefault()
          if (event.keyCode === 13) {
            onSubmit(event)
          }
        }}
        onChange={(event) => setPassword(event.target.value)}
        icon="lock"
        link={{
          title: 'Mot de passe oublié ?',
          ref: '/forgot-password'
        }}
      />

      <div className={styles.signUpForm__authGroup}>
        <Button type="primary" fluid onClick={(event) => onSubmit(event)}>
          Connexion
        </Button>

        <p className={styles.signUpForm__authGroup__separator}>
          Ou bien se connecter avec
        </p>

        <Button type="light" fluid onClick={(event) => onSubmit(event)}>
          <img alt="auth-google" src={GoogleLogoAsset} className={styles.signUpForm__authGroup__googleImg} />
          Google
        </Button>
      </div>
    </form>
  );
}
