import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div className={css.contactContainer}>
      <div className={css.contactWrapper}>
        <div className={css.contact}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={css.contact}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
