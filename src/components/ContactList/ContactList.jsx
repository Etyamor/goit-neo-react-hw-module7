import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { getContacts, getNameFilter } from "../../redux/selectors.js";
import { useSelector } from "react-redux";

function ContactList() {
  const contactList = useSelector(getContacts);
  const query = useSelector(getNameFilter);
  const filteredContacts = contactList.filter((contact) => {
    return contact.name.toLowerCase().includes(query.toLowerCase());
  })


  return (
    <>
      {!!filteredContacts.length ? (
        <ul className={css["contact-list"]}>
          {filteredContacts.map((contact) => (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts found</p>
      )}
    </>
  );
}

export default ContactList;
