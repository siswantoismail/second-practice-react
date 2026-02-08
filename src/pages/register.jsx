import AuthLayout from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <AuthLayout title="Register">
      <FormRegister />
      <p className="mt-4 text-sm text-center">
        have an acount?{" "}
        <Link to="/login" className="text-blue-600 font-medium hover:underline">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
}
