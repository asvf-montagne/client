import AuthLayout from '@components/atoms/AuthLayout';
import BigIcon from '@components/molecules/BigIcon';
import React from 'react';

export default function EmailSent() {
  return (
    <AuthLayout
      title="Bientôt terminé"
      helper={{ label: `Se connecter`, href: '/auth/sign-in' }}
    >
      <BigIcon
        icon="email"
        variant="primary"
        description="Cliquez sur le lien dans votre boîte mail pour continuer."
      />
    </AuthLayout>
  );
}
