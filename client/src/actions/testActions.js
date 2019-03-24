import { SET_MESSAGE } from '../reducers/mainReducer';

export function setAuth(data) {
  return {
    type: SET_MESSAGE,
    data,
  };
}
