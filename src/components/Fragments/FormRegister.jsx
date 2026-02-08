import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
export default function FormRegister() {
  return (
    <form action="">
      <InputForm
        label="Full Name"
        type="text"
        name="fullName"
        placeholder="Enter your full name"
      />
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="example@gmail.com"
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="••••••••"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="••••••••"
      />
      <Button classname="bg-blue-500 hover:bg-blue-600 w-full">Register</Button>
    </form>
  );
}
