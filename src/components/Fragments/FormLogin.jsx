import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
export default function FormLogin() {
  return (
    <form action="">
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
      <Button classname="bg-blue-500 hover:bg-blue-600 w-full">Login</Button>
    </form>
  );
}
