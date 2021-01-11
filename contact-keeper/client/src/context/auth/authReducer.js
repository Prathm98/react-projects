import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR,
  LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_ERRORS } from '../types';

const AuthReducer = (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state, isAuthenticated: true, user: action.payload, loading: false, error: null
      };
    case AUTH_ERROR:
      return {
        ...state, isAuthenticated: false, error: 'User could not loaded', loading: false
      };
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.data.token);
      return {
        ...state, ...action.payload.data, isAuthenticated: true, loading: false
      };
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        ...state, token: null, isAuthenticated: false, loading: false, user: null, error: action.payload
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.data.token);
      return {
        ...state, ...action.payload.data, isAuthenticated: true, loading: false
      };
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state, token: null, isAuthenticated: false, loading: false, user: null, error: action.payload
      };
    case CLEAR_ERRORS:
      return {
        ...state, error: null
      };
    default:
      return state;
  }
}

export default AuthReducer