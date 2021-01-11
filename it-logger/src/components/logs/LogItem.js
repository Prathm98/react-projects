import React from 'react';

const LogItem = ({ log }) => {
  const {id, msg, attention, tech, date} = log;
  return (
    <li className="collection-item">
      <a href="#edit-log-modal" className={`modal-trigger ${
        attention? 'red-text': 'blue-text'
      }`}>
        {msg}
      </a><br />
      <span className="grey-text">
        <span className="black-text">ID #{id}</span> last updated by{' '}
        <span className="black-text">{tech}</span> on {date}
      </span>
      <a href="#!" className="secondary-content">
        <i className="material-icons grey-text">delete</i>
      </a>
    </li>
  )
}

export default LogItem
