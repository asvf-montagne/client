import AuthLayout from "../components/atoms/AuthLayout";

export default function SignUp() {
  return (
    <AuthLayout title="S'inscrire" helper={{ label: `Vous avez déjà un compte ?`, href: '/sign-in' }}>
      <h1>SignUp</h1>
    </AuthLayout>
  );
}
