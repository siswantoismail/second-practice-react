import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
export default function FormLogin() {
  function handleLogin(event) {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
  }

  return (
    <form onSubmit={handleLogin}>
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
      <Button classname="bg-blue-500 hover:bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
}
