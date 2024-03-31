import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { NavLink } from "react-router-dom";

export default function Registration() {
    return (
        <div>
            <h1>Register your account, or {<NavLink to="/login">login</NavLink>}</h1>
            <RegistrationForm />
        </div>
    );
}