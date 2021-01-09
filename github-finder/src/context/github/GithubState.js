import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_REPOS, GET_USER} from '../types';

const GithubState = (props) => {
  const initialState = {
    loading: false,
    users: [],
    user: {},
    repos: []
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = async (text) => {    
    setLoading();
    const res = await axios.get('https://api.github.com/search/users?q='+text+'&client_id='+ process.env.REACT_APP_GIT_ID + 'client_secrete=' + process.env.REACT_APP_GIT_SECRETE);    
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    })
  }

  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    })
  }

  const getUser = async (username) => {
    setLoading();
    const res = await axios.get('https://api.github.com/users/'+username+'?client_id='+ process.env.REACT_APP_GIT_ID + 'client_secrete=' + process.env.REACT_APP_GIT_SECRETE);
    dispatch({
      type: GET_USER,
      payload: res.data
    })
  }

  const getUserRepos = async (username) => {
    setLoading();
    const res = await axios.get('https://api.github.com/users/'+username+'/repos?per_page=5&sort=created:asc&client_id='+ process.env.REACT_APP_GIT_ID + 'client_secrete=' + process.env.REACT_APP_GIT_SECRETE);
    dispatch({
      type: GET_REPOS,
      payload: res.data
    })
  }

  const clearUsers = () => dispatch({type: CLEAR_USERS});

  return <GithubContext.Provider
    value={{
      loading: state.loading,
      users: state.users,
      user: state.user,
      repos: state.repos,
      searchUsers,
      clearUsers,
      getUser,
      getUserRepos
    }}
  >
    {props.children}
  </GithubContext.Provider>
}

export default GithubState