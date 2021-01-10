import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ReposItem from './ReposItem';

export class Repos extends Component {
  static propTypes = {
    repos: PropTypes.array.isRequired
  }

  render() {
    return (
      this.props.repos.map(repo => (        
        <ReposItem key={repo.id} repo={repo} />
      ))
    )
  }
}

export default Repos
