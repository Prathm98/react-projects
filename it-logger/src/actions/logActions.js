import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from './types';

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

const setLoading = () => {
  return {
    type: SET_LOADING
  };
}
