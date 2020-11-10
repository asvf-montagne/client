import AuthLayout from '@components/atoms/AuthLayout';
import BigIcon from '@components/molecules/BigIcon';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function EmailVerify() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/auth/sign-in');
    }, 2500);
  }, [router]);

  return (
    <AuthLayout
      title="Compte validé"
      helper={{
        label: `La page ne charge pas ? Se connecter`,
        href: '/auth/sign-in',
      }}
    >
      <BigIcon
        icon="check_circle"
        variant="success"
        description="Vous allez être redirigé sur la page de connexion"
      />
    </AuthLayout>
  );
}
