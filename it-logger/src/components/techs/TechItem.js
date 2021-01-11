import React from 'react'

const TechItem = ({tech}) => {
  const { firstName, lastName } = tech;

  return (
    <li className="collection-item">
      {firstName} {lastName}
      <a href="#!" className="secondary-content">
        <i className="material-icons grey-text">delete</i>
      </a>
    </li>
  )
}

export default TechItem
