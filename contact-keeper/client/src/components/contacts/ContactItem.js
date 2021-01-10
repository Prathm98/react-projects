import React from 'react'

const ContactItem = ({contact}) => {
  const {name, email, id, phone, type} = contact;

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
        <button className="btn btn-dark btn-sm">Edit</button>
        <button className="btn btn-danger btn-sm">Delete</button>
      </p>
    </div>
  )
}

export default ContactItem
