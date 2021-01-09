import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onChange = e => this.setState({[e.target.name]: e.target.value});

  onSubmit = e => {
    e.preventDefault();
    if(this.state.text.trim().length > 0){
      this.props.searchUsers(this.state.text);
      this.setState({text: ''});
      this.props.setAlert(null, null);
    }else{      
      this.props.setAlert('light', 'Please Enter Some Value');
    }    
  }

  render() {
    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
          <input type='text' name='text' value={this.state.text} 
            onChange={this.onChange} placeholder="Search Users..." />
          <input type='submit' name='search' value='Search' className='btn btn-dark btn-block' />
        </form>
        {this.props.showClear && <input type='button' name='clear' value='Clear' 
          className='btn btn-light btn-block' onClick={this.props.clearUsers} />}
      </div>
    )
  }
}

export default Search
