import React, { useState } from 'react';
import AuthLayout from '@components/atoms/AuthLayout';
import FormSignUp from "@components/organisms/FormSignUp";

export default function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log(email, password);
  }

  return (
    <AuthLayout title="S'inscrire" helper={{ label: `Vous avez déjà un compte ?`, href: '/sign-in' }}>
      <FormSignUp
        fullName={fullName}
        setFullName={setFullName}
        password={password}
        setPassword={setPassword}
        email={email}
        setEmail={setEmail}
        onSubmit={handleSubmit}
      />
    </AuthLayout>
  );
}
