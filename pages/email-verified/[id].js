import AuthLayout from "@components/atoms/AuthLayout";
import BigIcon from "@components/molecules/BigIcon";

export default function EmailVerify() {
  return (
    <AuthLayout title="Compte validé" helper={{ label: `La page ne charge pas ? Se connecter`, href: '/sign-in' }}>
      <BigIcon
        icon="check_circle"
        variant="success"
        description="Vous allez être redirigé sur la page de connexion"
      />
    </AuthLayout>
  );
}
