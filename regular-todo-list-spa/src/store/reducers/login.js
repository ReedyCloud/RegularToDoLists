import * as actionTypes from '../actions/actionTypes';

const initialState = {
  email: '',
  password: '',
  login: true
}

const setEmail = (state, action) => {
  return {
    ...state,
    email: action.email
  }
}

const setPassword = (state, action) => {
  return {
    ...state,
    password: action.password
  }
}

const setLogin = (state) => {
  const updatedState = state.login;
  return {
    ...state,
    login: !updatedState
  }
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_EMAIL: return setEmail(state, action);
    case actionTypes.SET_PASSWORD: return setPassword(state, action);
    case actionTypes.SET_LOGIN: return setLogin(state);
    default: return state;
  }
};
export default reducer;