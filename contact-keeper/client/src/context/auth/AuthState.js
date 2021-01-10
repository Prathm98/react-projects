import AuthContext from './authContext';
import AuthReducer from './authReducer';
import React, { useReducer } from 'react';
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

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return <AuthContext.Provider
    value={{
      token: state.token,
      isAutheticated: state.isAutheticated,
      user: state.user,
      loading: state.loading,
      error: state.error
    }}
  >
    {props.children}
  </AuthContext.Provider>;
}

export default AuthState;