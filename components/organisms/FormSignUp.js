import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Button from "@components/atoms/Button";
import Input from '@components/atoms/Input';
import styles from './FormSignIn.module.css';

import GoogleLogoAsset from '@assets/images/logo-google.png';

FormSignUp.propTypes = {
  fullName: PropTypes.string.isRequired,
  setFullName: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default function FormSignUp({ fullName, setFullName, password, setPassword, email, setEmail, onSubmit }) {
  const refFullName = useRef(null)
  const refEmail = useRef(null)
  const refPassword = useRef(null)

  useEffect(() => {
    refFullName.current.focus();
  }, []);

  return (
    <form className={styles.signUpForm}>
      <Input
        autocomplete="name"
        label="Nom et prénom"
        placeholder="Jonh Doe"
        ref={refFullName}
        value={fullName}
        onKeyDown={(event) => {
          event.preventDefault()
          if (event.keyCode === 13) {
            refEmail.current.focus()
          }
        }}
        onChange={(event) => setFullName(event.target.value)}
        icon="person_outline"
      />
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
        autocomplete="new-password"
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
      />

      <div className={styles.signUpForm__authGroup}>
        <Button type="primary" fluid onClick={(event) => onSubmit(event)}>
          Connexion
        </Button>

        <p className={styles.signUpForm__authGroup__separator}>
          Ou bien se s'inscrire avec
        </p>

        <Button type="light" fluid onClick={(event) => onSubmit(event)}>
          <img alt="auth-google" src={GoogleLogoAsset} className={styles.signUpForm__authGroup__googleImg} />
          Google
        </Button>
      </div>
    </form>
  );
}
