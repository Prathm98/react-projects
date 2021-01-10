import React, {Fragment, useContext} from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const {contacts} = contactContext;

  return (
    <div className="grid-2">
      <div>Contact form</div>
      <div>
        {
          contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        }
      </div>
    </div>
  )
}

export default Contacts
