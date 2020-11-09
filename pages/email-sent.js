import AuthLayout from '@components/atoms/AuthLayout';
import BigIcon from '@components/molecules/BigIcon';

export default function EmailSent() {
  return (
    <AuthLayout
      title="Bientôt terminé"
      helper={{ label: `La page ne charge pas ? Se connecter`, href: '/sign-in' }}
    >
      <BigIcon
        icon="email"
        variant="primary"
        description="Cliquez sur le lien dans votre boîte mail pour continuer."
      />
    </AuthLayout>
  );
}
