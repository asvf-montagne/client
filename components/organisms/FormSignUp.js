import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Button from '@components/atoms/Button';
import Input from '@components/atoms/Input';
import styles from './FormSignIn.module.css';

import GoogleLogoAsset from '@assets/images/logo_google.png';

FormSignUp.propTypes = {
  fullName: PropTypes.string.isRequired,
  setFullName: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default function FormSignUp({
  fullName,
  setFullName,
  password,
  setPassword,
  email,
  setEmail,
  onSubmit,
}) {
  const refFullName = useRef(null);
  const refEmail = useRef(null);
  const refPassword = useRef(null);

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
          if (event.keyCode === 13) {
            refEmail.current.focus();
            event.preventDefault();
          }
        }}
        onChange={setFullName}
        meta={{}}
        icon="person"
      />
      <Input
        autocomplete="email"
        label="Email"
        placeholder="jonhdoe@example.com"
        ref={refEmail}
        value={email}
        onKeyDown={(event) => {
          if (event.keyCode === 13) {
            refPassword.current.focus();
            event.preventDefault();
          }
        }}
        meta={{}}
        onChange={setEmail}
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
          if (event.keyCode === 13) {
            onSubmit(event);
            event.preventDefault();
          }
        }}
        meta={{}}
        onChange={setPassword}
        icon="lock"
      />

      <div className={styles.signUpForm__authGroup}>
        <Button
          variant="primary"
          size="large"
          focus="primary"
          fluid
          onClick={(event) => onSubmit(event)}
        >
          Connexion
        </Button>

        <p className={styles.signUpForm__authGroup__separator}>Ou bien se s&apos;inscrire avec</p>

        <Button
          variant="light"
          size="large"
          focus="primary"
          fluid
          onClick={(event) => onSubmit(event)}
        >
          <img
            alt="auth-google"
            src={GoogleLogoAsset}
            className={styles.signUpForm__authGroup__googleImg}
          />
          Google
        </Button>
      </div>
    </form>
  );
}
