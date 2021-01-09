import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';

class App extends Component {  

  state = {
    loading: false,
    users: [],
    alert: null
  };

  // async componentDidMount() {    
  //   this.setState({loading: true});
  //   const res = await axios.get('https://api.github.com/users?client_id='+ process.env.REACT_APP_GIT_ID + 'client_secrete=' + process.env.REACT_APP_GIT_SECRETE);
  //   this.setState({loading: false, users: res.data});    
  // }

  searchUsers = async (text) => {    
    this.setState({loading: true});
    const res = await axios.get('https://api.github.com/search/users?q='+text+'&client_id='+ process.env.REACT_APP_GIT_ID + 'client_secrete=' + process.env.REACT_APP_GIT_SECRETE);
    this.setState({loading: false, users: res.data.items});    
  }

  clearUsers = () =>{
    this.setState({loading: false, users: []});
  }

  setAlert = (type, msg) => {
    type === null? this.setState({alert: null}): this.setState({alert: {type, msg}});
  }

  render() {
    return (
      <div className="App">
        <Navbar title='Github Finder' icon="fab fa-github" />
        <div className='container'>
          <Alert alert={this.state.alert} />
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} 
            showClear={this.state.users.length > 0} setAlert={this.setAlert} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>        
      </div>
    );
  }
}

export default App;
