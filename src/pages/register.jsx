import AuthLayout from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import FormRegister from "../components/Fragments/FormRegister";

export default function RegisterPage() {
  return (
    <AuthLayout title="Register">
      <FormRegister />
    </AuthLayout>
  );
}
