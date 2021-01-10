import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import { useReducer } from 'react';
import { v4 } from 'uuid';
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
    }],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Add Contact
  const addContact = contact =>{
    contact.id = v4();
    dispatch({
      type: ADD_CONTACT,
      payload: contact
    });
  }

  // Delete Contact
  const deleteContact = id => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  }

  // Set Current contact form
  const setCurrent = id =>{
    dispatch({
      type: SET_CURRENT,
      payload: id
    });
  }

  // Set Current contact form
  const updateContact = contact =>{
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact
    });
  }  

  // Clear Current contact form
  const clearCurrent = () =>{
    dispatch({
      type: CLEAR_CURRENT
    });
  }

  // Filter contacts
  const filterContacts = (text) =>{
    if(text.trim().length < 1){
      clearFilter();
    }else{
      dispatch({
        type: FILTER_CONTACTS,
        payload: text
      });
    }
  }

  // Clear filter
  const clearFilter = () =>{
    dispatch({
      type: CLEAR_FILTER
    });
  }

  return <ContactContext.Provider
    value={{
      contacts: state.contacts,
      current: state.current,
      filtered: state.filtered,
      addContact,
      deleteContact,
      setCurrent,
      clearCurrent,
      updateContact,
      filterContacts,
      clearFilter
    }}
  >
    {props.children}
  </ContactContext.Provider>;
}

export default ContactState;