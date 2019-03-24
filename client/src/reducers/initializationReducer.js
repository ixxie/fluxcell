export const SET_INITIALIZING = 'SET_INITIALIZING';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case SET_INITIALIZING:
      return { ...state, ...{ isInitializing: action.data } };

    default:
      return state;
  }
}
