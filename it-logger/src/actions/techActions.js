import { GET_TECHS, ADD_TECH, DELETE_TECH, TECHS_ERROR, SET_LOADING } from './types';

export const getTechs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/techs');
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.data
    });
  }
}

export const addTech = (tech) => async (dispatch) =>{
  try {
    setLoading();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tech)
    };
    const res = await fetch('/techs', requestOptions);
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.data
    });
  }
};

export const deleteTech = (id) => async (dispatch) =>{
  try {
    setLoading();
    const res = await fetch(`/techs/${id}`, {
      method: 'DELETE'
    });
    const data = await res.json();

    dispatch({
      type: DELETE_TECH,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.data
    });
  }
};

const setLoading = () => {
  return {
    type: SET_LOADING
  };
}