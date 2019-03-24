import { SET_AUTH } from '../reducers/mainReducer';

export function setAuth(data) {
  return {
    type: SET_AUTH,
    data,
  };
}

