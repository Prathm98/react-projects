import React, {useContext} from 'react';
import ContactContext from '../../context/contact/contactContext';


const ContactItem = ({contact}) => {
  const {name, email, _id, phone, type} = contact;

  const contactContext = useContext(ContactContext);

  const setCurrent = (e) => {
    contactContext.setCurrent(contact);
    contactContext.clearFilter();
  }
  
  const deleteContact = (e) => {
    contactContext.deleteContact(contact._id);
    contactContext.clearCurrent();
    contactContext.clearFilter();
  }

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name} <span className={'badge '+ (type == 'professional'? 'badge-success': 'badge-primary')}
          style={{ float: 'right'}}>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
      </h3>
      <ul className="List my-1">
        {email && <li>
          <i className="fas fa-envelope-open"></i> {email}
        </li>}
        {phone && <li>
          <i className="fas fa-phone"></i> {phone}
        </li>}
      </ul>
      <p>
        <button type="button" className="btn btn-dark btn-sm" onClick={setCurrent}>Edit</button>
        <button type="button" className="btn btn-danger btn-sm" onClick={deleteContact}>Delete</button>
      </p>
    </div>
  )
}

export default ContactItem
