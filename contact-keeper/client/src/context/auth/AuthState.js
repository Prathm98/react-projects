import AuthContext from './authContext';
import AuthReducer from './authReducer';
import React, { useReducer } from 'react';
import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR,
  LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_ERRORS } from '../types';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAutheticated: null,
    user: null,
    loading: true,
    error: null
  };

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
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.msg
      });
    }
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
      isAutheticated: state.isAutheticated,
      user: state.user,
      loading: state.loading,
      error: state.error,
      register,
      clearErrors
    }}
  >
    {props.children}
  </AuthContext.Provider>;
}

export default AuthState;