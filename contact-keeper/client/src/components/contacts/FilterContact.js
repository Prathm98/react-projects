import React, { useRef, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const FilterContact = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef('');

  useEffect(()=>{
    if(contactContext.filtered === null){
      text.current.value = '';
    }
  }, [contactContext, contactContext.filtered]);
  
  const filterContact = (e) =>{
    if(text !== ''){
      contactContext.filterContacts(e.target.value);
    }
  }

  return (
    <form>
      <input type="text" ref={text} placeholder="Search Contacts..." onChange={filterContact} />
    </form>
  )
}

export default FilterContact
