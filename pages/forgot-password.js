import { useState } from 'react';
import AuthLayout from '@components/atoms/AuthLayout';
import FormForgotPassword from "@components/organisms/FormForgotPassword";

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log(email);
  }

  return (
    <AuthLayout title="S’inscrire" helper={{ label: `Vous avez déjà un compte ?`, href: '/sign-in' }}>
      <FormForgotPassword
        email={email}
        setEmail={setEmail}
        onSubmit={handleSubmit}
      />
    </AuthLayout>
  );
}
