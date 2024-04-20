import { useSelector } from "react-redux";
import Contact from "../contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter);

  const visibleContacts = contacts.filter(contact =>
  contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {visibleContacts.map( contact => 
        <Contact key={contact.id} contact={contact}  />
        )
      }
    </ul>
  );
};

export default ContactList;
