import * as actionTypes from '../actions/actionTypes';

const initialState = {
  login: true,
  error: null
}

const setLogin = (state) => {
  const updatedState = state.login;
  return {
    ...state,
    login: !updatedState
  }
}

const setError = (state, action) => {
  return {
    ...state,
    error: action.val
  }
}

const resetError = (state) => {
  return {
    ...state,
    error: null
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOGIN: return setLogin(state);
    case actionTypes.SET_ERROR: return setError(state, action);
    case actionTypes.RESET_ERROR: return resetError(state, action);
    default: return state;
  }
};
export default reducer;