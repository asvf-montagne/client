import AuthLayout from "../components/atoms/AuthLayout";

export default function SignIn() {
  return (
    <AuthLayout title="Se connecter" helper={{ label: `Vous n'avez pas de compte ?`, href: '/sign-up' }}>
      <h1>SignIn</h1>
    </AuthLayout>
  );
}
