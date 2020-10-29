import AuthLayout from "../components/atoms/AuthLayout";

export default function ChangePassword() {
  return (
    <AuthLayout title="Nouveau mod de passe" helper={{ label: `Vous avez déjà un compte ?`, href: '/sign-in' }}>
      <h1>ChangePassword</h1>
    </AuthLayout>
  );
}
