import React from 'react';
import axios from '../../../axios';

import styles from './Login.module.scss';

class Login extends React.Component {

  state = {
    email: '',
    password: '',
    login: true
  }

  loginHandler = (e) =>{
    e.preventDefault();
    axios.post('auth/login', {
      email: this.state.email,
      password: this.state.password
    }).then(res => {
        localStorage.setItem('jwt', res.data.token);
        this.props.history.push('/logged/lists');
      }).catch(err =>{
        switch (err.response.data.status) {
          case 400:
            alert('uzupelnij dane');
            break;
          case 401:
            alert('bledny login lub haslo');
            break;
        
          default:
            break;
        }
      });
  }
  registerHandler = (e) =>{
    e.preventDefault();
    axios.post('auth/register', {
      email: this.state.email,
      password: this.state.password
    }).catch(err => alert('uzytkownik juz istnieje') );
  }

  loginStateHandler = () => {
    const log = this.state.login;
    this.setState({login: !log})
  }

  render () {

    let form = (
      <div className={styles.Form}>
        <div>Login</div>
        <form onSubmit={e => this.loginHandler(e)}>
          <label>email</label>
          <input type="text" name="email" onChange={e => this.setState({email: e.target.value})} value={this.state.email} />
          <label>password</label>
          <input type="password" name="email" onChange={e => this.setState({password: e.target.value})} value={this.state.password} />
          <button> Login</button>
        </form>
        <p>Dont have an account <span onClick={this.loginStateHandler}>Register here</span></p>

      </div>
    );

    if(!this.state.login){
      form = (
        <div className={styles.Form}>
          <div>Register</div>
          <form onSubmit={e => this.registerHandler(e)}>
            <label>email</label>
            <input type="text" name="email" onChange={e => this.setState({email: e.target.value})} value={this.state.email} />
            <label>password</label>
            <input type="password" name="email" onChange={e => this.setState({password: e.target.value})} value={this.state.password} />
            <button>Register me</button>
          </form>
          <p>Already having an account <span onClick={this.loginStateHandler}>Login here</span></p>

      </div>
      );
    }

  return(
    <div className={styles.Container}>
      {form}
    </div>
  );
  }
};

export default Login;