import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import { useReducer } from 'react';
import uuid from 'uuid';
import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT,
  UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER } from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [{
      id: 1,
      name: "abcd",
      email: "abcd@gmail.com",
      phone: "1245789634",
      type: "personal"
    },{
      id: 2,
      name: "abcd1",
      email: "abcd1@gmail.com",
      phone: "2245789634",
      type: "professional"
    },{
      id: 3,
      name: "abcd2",
      email: "abcd2@gmail.com",
      phone: "1245589634",
      type: "personal"
    }]
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  return <ContactContext.Provider
    value={{
      contacts: state.contacts
    }}
  >
    {props.children}
  </ContactContext.Provider>;
}

export default ContactState;