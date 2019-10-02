import axios from '../axios';

export const login = (email, password, props) => {
  axios.post('auth/login', {
    email: email,
    password: password
  }).then(res =>{
    localStorage.setItem('jwt', res.data.token);
    props.history.push('/logged/lists');
  });
}

export const register = (email, password) => {
  axios.post('auth/register', {
    email: email,
    password: password
  }).catch(() => alert('uzytkownik juz istnieje'));
}