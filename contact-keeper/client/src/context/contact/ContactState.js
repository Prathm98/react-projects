import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import axios from 'axios';
import { useReducer } from 'react';
import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, SET_LOADING,
  UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER, GET_CONTACTS, CONTACT_ERROR, CLEAR_CONTACTS } from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: null,
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Get Contacts
  const getContacts = async () => {   
    try {      
      dispatch({type: SET_LOADING});
      const res = await axios.get('/api/contacts');  
      dispatch({
        type: GET_CONTACTS,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.msg
      });  
    }
  }

  // Add Contact
  const addContact = async contact =>{
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };
    try {
      dispatch({type: SET_LOADING});
      const res = await axios.post('/api/contacts', contact, config);

      dispatch({
        type: ADD_CONTACT,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.msg
      });      
    }    
  }

  // Delete Contact
  const deleteContact = async id => {
    try {
      dispatch({type: SET_LOADING});
      const res = await axios.delete('/api/contacts/'+id);

      dispatch({
        type: DELETE_CONTACT,
        payload: id
      });
      
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.msg
      });      
    }    
  }

  // Set Current contact form
  const setCurrent = id =>{
    dispatch({
      type: SET_CURRENT,
      payload: id
    });
  }

  // Set Current contact form
  const updateContact = async contact =>{
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };
    try {
      dispatch({type: SET_LOADING});
      const res = await axios.put('/api/contacts/'+contact._id, contact, config);

      dispatch({
        type: UPDATE_CONTACT,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.msg
      });      
    }    
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

  // Clear Contacts
  const clearContacts = () => {
    dispatch({
      type: CLEAR_CONTACTS
    });
  }

  return <ContactContext.Provider
    value={{
      contacts: state.contacts,
      current: state.current,
      filtered: state.filtered,
      error: state.error,
      addContact,
      deleteContact,
      setCurrent,
      clearCurrent,
      updateContact,
      filterContacts,
      clearFilter,
      getContacts,
      clearContacts
    }}
  >
    {props.children}
  </ContactContext.Provider>;
}

export default ContactState;