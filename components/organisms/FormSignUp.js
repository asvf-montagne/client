import React, { useEffect, useRef } from 'react';
import Button from '@components/atoms/Button';
import Input from '@components/atoms/Input';
import styles from './FormSignIn.module.css';

import GoogleLogoAsset from '@assets/images/logo_google.png';
import { Field, Form } from 'react-final-form';
import { FormUtil } from '../../util/form';
import { Users } from '../../services/users';
import services from '../../services';
import { useRouter } from 'next/router';
import DisplaySuccessOrError from '@components/atoms/FormSuccessOrError';

export default function FormSignUp({}) {
  const router = useRouter();

  const refUsername = useRef(null);
  const refEmail = useRef(null);
  const refPassword = useRef(null);

  async function onSubmit(values, form) {
    console.log(values);

    try {
      const res = await services().users.signUp(values);

      console.log(res.statusCode === 200, res);
      if (res.status === 200) {
        await router.push('/auth/email-sent');
      } else {
        console.log(Users.validateFromBackendSignUp(res));

        return Users.validateFromBackendSignUp(res);
      }
    } catch (ex) {
      console.error(ex);
    }
  }

  useEffect(() => {
    refUsername.current.focus();
  }, []);

  return (
    <Form
      validate={Users.validateSignUp}
      onSubmit={onSubmit}
      render={({ submitError, handleSubmit, values, form }) => (
        <form className={styles.signUpForm}>
          <DisplaySuccessOrError success={false} error={submitError} successMessage={''} />

          <Field name="username" type="text">
            {({ input, meta }) => (
              <Input
                ref={refUsername}
                icon="person"
                label="Nom d'utilisateur"
                placeholder="john.doe"
                onKeyDown={(e) => FormUtil.navigateToNextInput(e, refEmail, 13)}
                {...input}
                meta={meta}
              />
            )}
          </Field>

          <Field name="email" type="text">
            {({ input, meta }) => (
              <Input
                ref={refEmail}
                icon="mail"
                label="Email"
                placeholder="john.doe@gmail.com"
                onKeyDown={(e) => FormUtil.navigateToNextInput(e, refPassword, 13)}
                {...input}
                meta={meta}
              />
            )}
          </Field>

          <Field name="password" type="password">
            {({ input, meta }) => (
              <Input
                ref={refPassword}
                icon="password"
                label="Mot de passe"
                placeholder="Choisissez un bon mot de passe"
                onKeyDown={(e) => FormUtil.withKeyCode(e, 13, () => handleSubmit(values, form))}
                {...input}
                meta={meta}
              />
            )}
          </Field>

          <div className={styles.signUpForm__authGroup}>
            <Button
              variant="primary"
              size="large"
              focus="primary"
              fluid
              onClick={(event) => handleSubmit(values, form)}
            >
              S'inscrire
            </Button>

            <p className={styles.signUpForm__authGroup__separator}>
              Ou bien se s&apos;inscrire avec
            </p>

            <Button
              variant="light"
              size="large"
              focus="primary"
              fluid
              onClick={() => console.log('todo: go to goodle')}
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
      )}
    />
  );
}
