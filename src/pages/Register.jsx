import RegisterForm from "../components/RegisterForm/RegistrationForm";
import { NavLink } from "react-router-dom";

export default function Register() {
    return (
        <div>
            <h1>Register your account, or {<NavLink to="/login">login</NavLink>}</h1>
            <RegisterForm />
        </div>
    );
}