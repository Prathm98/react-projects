import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import User from './components/users/User';

class App extends Component {  

  state = {
    loading: false,
    users: [],
    user: {},
    repos: [],
    alert: null
  };

  // async componentDidMount() {    
    // this.setState({loading: true});
    // const res = await axios.get('https://api.github.com/users?client_id='+ process.env.REACT_APP_GIT_ID + 'client_secrete=' + process.env.REACT_APP_GIT_SECRETE);
    // this.setState({loading: false, users: res.data});    
  // }

  getUser = async (username) => {
    this.setState({loading: true});
    const res = await axios.get('https://api.github.com/users/'+username+'?client_id='+ process.env.REACT_APP_GIT_ID + 'client_secrete=' + process.env.REACT_APP_GIT_SECRETE);
    this.setState({loading: false, user: res.data});
  }

  getUserRepos = async (username) => {
    this.setState({loading: true});
    const res = await axios.get('https://api.github.com/users/'+username+'/repos?per_page=5&sort=created:asc&client_id='+ process.env.REACT_APP_GIT_ID + 'client_secrete=' + process.env.REACT_APP_GIT_SECRETE);
    this.setState({loading: false, repos: res.data});
  }

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
      <Router>
        <div className="App">
          <Navbar title='Github Finder' icon="fab fa-github" />
          <div className='container'>
            <Switch>
              <Route exact path="/" render={props=>(
                <Fragment>
                  <Alert alert={this.state.alert} />
                  <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} 
                    showClear={this.state.users.length > 0} setAlert={this.setAlert} />
                  <Users loading={this.state.loading} users={this.state.users} />
                </Fragment>
              )} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={props=>(
                <Fragment>
                  <User {...props} loading={this.state.loading} getUserRepos={this.getUserRepos}
                    user={this.state.user} repos={this.state.repos} getUser={this.getUser} />
                </Fragment>
              )} />
            </Switch>
            
          </div>        
        </div>
      </Router>
    );
  }
}

export default App;
