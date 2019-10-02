import React from 'react';
import {login, register}  from '../../../Axios/Auth/Authorization';
import styles from './Login.module.scss';

class Login extends React.Component {

  state = {
    email: '',
    password: '',
    login: true
  }

  loginHandler = (e) =>{
    e.preventDefault();
    login(this.state.email, this.state.password,this.props);
  }
  registerHandler = (e) =>{
    e.preventDefault();
    register(this.state.email, this.state.password);
    this.setState({login: true});
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
          <input type="password" name="email" onChange={ e => this.setState({password: e.target.value})} value={this.state.password} />
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