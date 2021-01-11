import React from 'react'

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a href="#add-log-model" className="btn-floating btn-large darken-1 blue modal-trigger">
        <i className="large material-icons">add</i>
      </a>
      <ul>
        <li><a href="#tech-list-modal" className="btn-floating red modal-trigger">
          <i className="material-icons">person</i>
        </a></li>
        <li><a href="#tech-list-add" className="btn-floating green darken-1 modal-trigger">
          <i className="material-icons">person_add</i>
        </a></li>
      </ul>
    </div>
  )
}

export default AddBtn
