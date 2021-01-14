import React from 'react';
import { connect } from 'react-redux';
import { deleteLog, setCurrent, clearCurrent } from '../../actions/logActions';

const LogItem = ({ log, deleteLog, setCurrent, clearCurrent }) => {
  const {id, msg, attention, tech, date} = log;

  const deleteItem = () => {
    deleteLog(id);
    console.log(id);
  }

  const setCurrentLog = () => {
    setCurrent(log);
  }

  return (
    <li className="collection-item">
      <a href="#edit-log-modal" onClick={setCurrentLog} className={`modal-trigger ${
        attention? 'red-text': 'blue-text'
      }`}>
        {msg}
      </a><br />
      <span className="grey-text">
        <span className="black-text">ID #{id}</span> last updated by{' '}
        <span className="black-text">{tech}</span> on {date}
      </span>
      <a href="#!" onClick={deleteItem} className="secondary-content">
        <i className="material-icons grey-text">delete</i>
      </a>
    </li>
  )
}

export default connect(null, {deleteLog, setCurrent, clearCurrent})(LogItem);
