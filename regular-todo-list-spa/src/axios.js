import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://todo-af0a1.firebaseio.com/'
});

export default instance;