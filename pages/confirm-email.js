import AuthLayout from "../components/atoms/AuthLayout";

export default function ConfirmEmail() {
  return (
    <AuthLayout title="S’inscrire" helper={{ label: `La mémoire vous revient ? Se connecter`, href: '/sign-in' }}>
      <h1>ConfirmEmail</h1>
    </AuthLayout>
  );
}
