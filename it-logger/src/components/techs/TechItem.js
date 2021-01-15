import React from 'react'
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techActions';

const TechItem = ({tech, deleteTech}) => {
  const { id, firstName, lastName } = tech;

  return (
    <li className="collection-item">
      {firstName} {lastName}
      <a href="#!" className="secondary-content" onClick={() => deleteTech(id)}>
        <i className="material-icons grey-text">delete</i>
      </a>
    </li>
  )
}

export default connect(null, {deleteTech})(TechItem);
