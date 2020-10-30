import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Button from "@components/atoms/Button";
import Input from '@components/atoms/Input';
import styles from './FormNewPassword.module.css';

FormNewPassword.propTypes = {
  passwordConfirm: PropTypes.string.isRequired,
  setPasswordConfirm: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default function FormNewPassword({ password, setPassword, passwordConfirm, setPasswordConfirm, onSubmit }) {
  const refPassword = useRef(null)
  const refPasswordConfirm = useRef(null)

  useEffect(() => {
    refPassword.current.focus();
  }, []);

  return (
    <form className={styles.signUpForm}>
      <Input
        autocomplete="new-password"
        type="password"
        label="Nouveau mot de passe"
        placeholder="password"
        ref={refPassword}
        value={password}
        onKeyDown={(event) => {
          event.preventDefault()
          if (event.keyCode === 13) {
            refPasswordConfirm.current.focus()
          }
        }}
        onChange={(event) => setPassword(event.target.value)}
        icon="lock"
      />

      <Input
        autocomplete="new-password"
        type="password"
        label="Confirmation du mot de passe"
        placeholder="password"
        ref={refPasswordConfirm}
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
          Change password
        </Button>
      </div>
    </form>
  );
}
