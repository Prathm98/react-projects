import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, CLEAR_CONTACTS, SET_LOADING,
  UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER, GET_CONTACTS, CONTACT_ERROR } from '../types';

const contactReducer = (state, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state, contacts: action.payload, loading: false
      };
    case ADD_CONTACT:
      return {
        ...state, contacts: [action.payload, ...state.contacts], loading: false
      };
    case UPDATE_CONTACT:
      return {
        ...state, loading: false, current: null, contacts: state.contacts.map(contact =>(
          action.payload._id === contact._id? action.payload: contact
        ))
      };
    case DELETE_CONTACT:
      return {
        ...state, loading: false, contacts: state.contacts.filter(contact=> contact._id !== action.payload)
      };
    case SET_CURRENT:
      return {
        ...state, current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state, current: null
      };
    case FILTER_CONTACTS:
      return {
        ...state, loading: false, current: null, filtered: state.contacts.filter(contact =>{
          const regex = new RegExp(`${action.payload}`, 'gi');
          return contact.name.match(regex) || contact.email.match(regex);
        })
      };
    case CLEAR_CONTACTS:
      return {
        ...state, loading: false, current: null, filtered: null, contacts: null, error: null          
      };
    case CLEAR_FILTER:
      return {
        ...state, filtered: null
      };
    case SET_LOADING:
      return {
        ...state, loading: true
      };
    case CONTACT_ERROR:
      return {
        ...state, loading: false, error: action.payload
      };
    default:
      return state;
  }
}

export default contactReducer;