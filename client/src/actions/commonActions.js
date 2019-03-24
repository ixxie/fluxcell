/* eslint-disable import/prefer-default-export */
import { SET_ERROR } from '../reducers/commonReducer';

export function setError(data) {
  return {
    type: SET_ERROR,
    data,
  };
}
