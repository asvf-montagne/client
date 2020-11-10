import React, { useState } from 'react';
import AuthLayout from '@components/atoms/AuthLayout';
import FormForgotPassword from '@components/organisms/FormForgotPassword';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log(email);
  };

  return (
    <AuthLayout
      title="Changer de motde passe"
      helper={{ label: `Vous avez déjà un compte ?`, href: '/auth/sign-in' }}
    >
      <FormForgotPassword
        email={email}
        setEmail={setEmail}
        onSubmit={handleSubmit}
      />
    </AuthLayout>
  );
}
