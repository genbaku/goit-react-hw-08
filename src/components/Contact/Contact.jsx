import css from "./Contact.module.css"
import { FaPhoneAlt } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ contact }) {

    const dispatch = useDispatch();

    return (
        <>
            <div className={css.li}>
                <div>
                    <p><IoPersonSharp />{contact.name}</p>
                    <p><FaPhoneAlt />{contact.number}</p>
                </div>
                <button className={css.b} onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
            </div>
        </>
    );
}
