import * as actionTypes from './actionTypes';
import axios from '../../Axios/axios';

export const setEmail = (email) => {
  return {
    type: actionTypes.SET_EMAIL,
    email: email
  };
}

export const setPassword = (password) => {
  return {
    type: actionTypes.SET_PASSWORD,
    password: password
  }
}

export const setLogin=() => {
  return {
    type: actionTypes.SET_LOGIN
  };
}

export const loginUser = (email, password, props) => {
  return dispatch => {
    axios.post('auth/login', {
      email: email,
      password: password
    }).then(res => {
      localStorage.setItem('jwt', res.data.token);
      props.history.push('/logged/lists');
    }).catch((res) => {
      dispatch(setError(res.response.status))
    });
  }
}

export const setError = (err) => {
  return {
    type: actionTypes.SET_ERROR,
    val: err
  }
}

export const resetError = () => {
  return {
    type: actionTypes.RESET_ERROR
  };
}

export const registerUser = ( email, password, props) => {
  return dispatch => {
    axios.post('auth/register', {
      email: email,
      password: password
    }).then(() => {
      dispatch(loginUser(email, password, props))
    }).catch((res) => {
      dispatch(setError(res.response.status))
    });
  }
}