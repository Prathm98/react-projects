import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import { v4 } from 'uuid';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {
  const initialState = [];

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (type, msg) => {
    let id = v4();
    dispatch({
      type: SET_ALERT,
      payload: {type, msg, id}
    });
    setTimeout(()=>{
      dispatch({
        type: REMOVE_ALERT,
        payload: id
      })
    }, 5000);
  }

  return <AlertContext.Provider
    value={{
      alert: state, 
      setAlert
    }}
  >
    {props.children}
  </AlertContext.Provider>
}

export default AlertState;