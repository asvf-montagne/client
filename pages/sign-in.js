import React, { useState } from 'react';
import AuthLayout from '@components/atoms/AuthLayout';
import FormSignIn from "@components/organisms/FormSignIn";

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log(email, password);
  }

  return (
    <AuthLayout title="Se connecter" helper={{ label: `Vous n'avez pas de compte ?`, href: '/sign-up' }}>
      <FormSignIn
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        onSubmit={handleSubmit}
      />
    </AuthLayout>
  );
}
