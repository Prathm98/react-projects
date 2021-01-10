import React from 'react';
import PropTypes from 'prop-types';

function ReposItem(props) {
  return (
    <div className='card'>
      <a href={props.repo.html_url} rel='noreferrer' target='_blank'>{props.repo.name}</a>
    </div>
  )
}

ReposItem.prototype = {
  repo: PropTypes.object.isRequired
};

export default ReposItem
