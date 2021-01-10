import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertReducer = (state, action) => {
  switch(action.type){
    case SET_ALERT:
      return {
        type: action.payload.type,
        msg: action.payload.msg
      };
    case REMOVE_ALERT:
      return null;
    default:
      return state
  }
}

export default AlertReducer;