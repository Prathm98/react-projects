import AuthContext from './authContext';
import AuthReducer from './authReducer';
import React, { useReducer } from 'react';
import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR,
  LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_ERRORS } from '../types';
import setAuthToken from '../../utils/setAuthToken';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    loading: true,
    error: null
  };

  // Load User
  const loadUser = async () => {
    if(localStorage.token){
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get('/api/users');

      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: AUTH_ERROR
      });      
    }
  }

  // Login User
  const login = async formData => {
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/auth', formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res
      });
      loadUser();
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data.msg
      });
    }
  }
  
  // Register User
  const register = async formData => {
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/users', formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res
      });

      loadUser();
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.msg
      });
    }
  }

  const logout = () =>{
    dispatch({
      type: LOGOUT
    });
  }

  const clearErrors = () => {
    dispatch({
      type: CLEAR_ERRORS
    });
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return <AuthContext.Provider
    value={{
      token: state.token,
      isAuthenticated: state.isAuthenticated,
      user: state.user,
      loading: state.loading,
      error: state.error,
      register,
      clearErrors,
      loadUser,
      login,
      logout
    }}
  >
    {props.children}
  </AuthContext.Provider>;
}

export default AuthState;