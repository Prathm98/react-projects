import React, {useState, useContext, useEffect} from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { current } = contactContext;

  useEffect(() => {
    setContact(current? current: {
      name: '', email: '', phone: '', type: 'personal'
    });
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '', email: '', phone: '', type: 'personal'
  });

  const { name, email, phone, type } = contact;

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }

  const clearContact = (e) => {
    contactContext.clearCurrent();
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(current){
      contactContext.updateContact(contact);
    }else{
      contactContext.addContact(contact);
    }    
    setContact({
      name: '', email: '', phone: '', type: 'personal'
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">{current? 'Update Contact': 'Add Contact'}</h2>
      <input type="text" name="name" value={name} onChange={onChange} placeholder="name" />
      <input type="text" name="email" value={email} onChange={onChange} placeholder="email" />
      <input type="text" name="phone" value={phone} onChange={onChange} placeholder="phone" />
      <h5>Contact Type:</h5>
      <input type="radio" name="type" value="personal" 
        onChange={onChange} checked={ type == 'personal' } /> Personal {'  '}
      <input type="radio" name="type" value="professional" 
        onChange={onChange} checked={ type == 'professional' } /> Professional
      <input type="submit" className="btn btn-primary btn-block" name="Submit" 
        value={current? 'Update Contact': 'Add Contact'} />
      {current && <button className="btn btn-light btn-block" onClick={clearContact}>Clear All</button>}
    </form>
  )
}

export default ContactForm
