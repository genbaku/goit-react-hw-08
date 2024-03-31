// import AuthError from "../components/AuthError/AuthError";
import LoginForm from "../components/LoginForm/LoginForm";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <h1>Login to your account, or {<NavLink to="/register">register</NavLink>}</h1>
      <LoginForm />
      {/* <AuthError /> */}
    </div>
  );
}