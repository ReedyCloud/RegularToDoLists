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

export const loginUser = (e, email, password, props) => {
  e.preventDefault();
  return () => {
    axios.post('auth/login', {
      email: email,
      password: password
    }).then(res => {
      localStorage.setItem('jwt', res.data.token);
      props.history.push('/logged/lists');
    });
  }
}

export const registerUser = (e, email, password) => {
  e.preventDefault();
  return () => {
    axios.post('auth/register', {
      email: email,
      password: password
    }).catch(() => alert('uzytkownik juz istnieje'));
  }
}