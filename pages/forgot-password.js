import AuthLayout from "../components/atoms/AuthLayout";

export default function ForgotPassword() {
  return (
    <AuthLayout title="Mot de passe oublié ?" helper={{ label: `La mémoire vous revient ? Se connecter`, href: '/sign-in' }}>
      <h1>ForgotPassword</h1>
    </AuthLayout>
  );
}
