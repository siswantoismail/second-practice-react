import AuthLayout from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <AuthLayout title="Login">
      <FormLogin />
      <p className="mt-4 text-sm text-center">
        Don't have an acount?{" "}
        <Link
          to="/register"
          className="text-blue-600 font-medium hover:underline"
        >
          Register
        </Link>
      </p>
    </AuthLayout>
  );
}
