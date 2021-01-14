import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT,
  UPDATE_LOG } from './types';

export const getLogs = () => async (dispatch) =>{
  try {
    setLoading();

    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};

export const addLog = (logItem) => async (dispatch) =>{
  try {
    setLoading();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(logItem)
    };
    const res = await fetch('/logs', requestOptions);
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};

export const updateLog = (log) => async (dispatch) =>{
  try {
    setLoading();
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(log)
    };
    const res = await fetch(`/logs/${log.id}`, requestOptions);
    const data = await res.json();

    dispatch({
      type: UPDATE_LOG,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};

export const deleteLog = (id) => async (dispatch) =>{
  try {
    setLoading();
    const res = await fetch(`/logs/${id}`, {
      method: 'DELETE'
    });
    const data = await res.json();

    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};

export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  }
}

export const clearCurrent = log => {
  return {
    type: CLEAR_CURRENT
  }
}

const setLoading = () => {
  return {
    type: SET_LOADING
  };
}
