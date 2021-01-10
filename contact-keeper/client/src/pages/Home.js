import React from 'react'
import ContactForm from '../components/contacts/ContactForm'
import Contacts from '../components/contacts/Contacts'
import FilterContact from '../components/contacts/FilterContact'

const Home = () => {
  return (
    <div className="grid-2">
      <div><ContactForm /></div>
      <div>
        <FilterContact />
        <Contacts />
      </div>
    </div>
  )
}

export default Home
