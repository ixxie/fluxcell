export const SET_AUTH = 'SET_AUTH';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case SET_AUTH:
      return { ...state, ...{ auth: action.data } };

    default:
      return state;
  }
}
