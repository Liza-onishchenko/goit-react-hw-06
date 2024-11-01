import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from "./Contact.module.css";

const ContactList = () => {
  //оформлення підписки
  const contacts = useSelector((state) => state.contactsData.items);
  const filter = useSelector((state) => state.filter.name);
  //ф-ця відправник
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contacts) =>
    contacts.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  const onDeleteContacts = (contactId) => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  return (
    <ul className={css.listContact}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContacts={onDeleteContacts}
        />
      ))}
    </ul>
  );
};

export default ContactList;
