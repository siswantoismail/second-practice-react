import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useRef, useEffect, useState } from "react";
import { login } from "../../services/auth.service";
export default function FormLogin() {
  const [loginFailed, setLoginFailed] = useState("");
  function handleLogin(event) {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // window.location.href = "/products";
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  }

  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="text"
        name="username"
        placeholder="Jhon Doe"
        ref={usernameRef}
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
      {loginFailed && <p className="text-red-500 mt-2">{loginFailed}</p>}
    </form>
  );
}
