import { useSelector } from "react-redux";
import { selectAuthError } from "../../redux/auth/selectors";
import css from "./AuthError.module.css";

export default function AuthError() {

  const isAuthError = useSelector(selectAuthError)

  return (
    isAuthError ? <h2 className={css.error}>Error occurred! Try again!</h2> : " "
  );
}