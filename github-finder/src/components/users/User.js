import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Repos from '../repos/Repos';

export class User extends Component {

  componentDidMount(){
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  static propTypes={
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired
  }

  render() {
    const { login, company, avatar_url, html_url, name, blog, bio, location, 
      hireable, public_repos, public_gists, followers, following} = this.props.user;
    
    if(this.props.loading) return <Spinner />

    return (
      <Fragment>
        <Link  to="/" className="btn btn-light">Back</Link>
        <strong>Hireable: {hireable? <i className="fas fa-check text-success"></i>: 
          <i className="fas fa-times-circle text-danger"></i>}</strong>
        <div className="card grid-2">
          <div className="text-center">
            <img src={avatar_url} alt={login} className="round-img" style={{width: '150px'}} />
            <h2>{name}</h2>
            <h5>{location}</h5>
          </div>
          <div>            
            {bio? <Fragment>
              <h3>Bio:</h3>
              <p>{bio}</p>
            </Fragment>: <Fragment>
              <h3>Bio:</h3>
              <h4>Bio not available.</h4>  
            </Fragment>}
            {company && <Fragment><strong>Company: </strong>{company}<br/></Fragment>}
            {login && <Fragment><strong>Username: </strong>{login}<br/></Fragment>}
            {blog && <Fragment><strong>Website: </strong>{blog}<br/></Fragment>}
            {html_url && <Fragment>
              <a href={html_url} rel="noreferrer" className="btn btn-dark" target="_blank">Visit Profile</a>  
            </Fragment>}
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers: {followers}</div>
          <div className='badge badge-light'>Following: {following}</div>
          <div className='badge badge-success'>Public Repos: {public_repos}</div>
          <div className='badge badge-dark'>Public Gists: {public_gists}</div>
        </div>
        <Repos repos={this.props.repos} />
      </Fragment>
    )
  }
}

export default User
