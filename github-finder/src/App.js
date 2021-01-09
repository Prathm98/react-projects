import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';

class App extends Component {  

  state = {
    loading: false,
    users: [] 
  };

  async componentDidMount() {    
    this.setState({loading: true});
    const res = await axios.get('https://api.github.com/users?client_id='+ process.env.REACT_APP_GIT_ID + 'client_secrete=' + process.env.REACT_APP_GIT_SECRETE);
    this.setState({loading: false, users: res.data});    
  }

  render() {
    return (
      <div className="App">
        <Navbar title='Github Finder' icon="fab fa-github" />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>        
      </div>
    );
  }
}

export default App;
