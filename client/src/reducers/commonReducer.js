export const SET_ERROR = 'SET_ERROR';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, ...{ error: action.data } };

    default:
      return state;
  }
}
