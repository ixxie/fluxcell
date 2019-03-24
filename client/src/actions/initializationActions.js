import { SET_INITIALIZING } from '../reducers/initializationReducer';

export function setInitializing(data) {
  return {
    type: SET_INITIALIZING,
    data,
  };
}
