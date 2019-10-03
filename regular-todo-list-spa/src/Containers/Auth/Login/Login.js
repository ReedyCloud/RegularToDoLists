import React from 'react';
import { connect } from 'react-redux';

import styles from './Login.module.scss';
import * as actions from '../../../store/actions/index';

class Login extends React.Component {

  render () {

    let form = (
      <div className={styles.Form}>
        <div>Login</div>
        <form onSubmit={ (e) => this.props.onLoginUser(e, this.props.email, this.props.password, this.props) }>
          <label>email/login</label>
          <input type="text" name="email" onChange={e => this.props.onSetEmail(e.target.value)} value={this.props.email} />
          <label>password</label>
          <input type="password" name="email" onChange={ e => this.props.onSetPassword(e.target.value)} value={this.props.password} />
          <button>Login</button>
        </form>
        <p>Dont have an account <span onClick={this.props.onSetLogin}>Register here</span></p>
        <div style={{fontSize: '13px'}}>for testing: login: demo, password: demo</div>
      </div>
    );

    if(!this.props.login){
      form = (
        <div className={styles.Form}>
          <div>Register</div>
          <form onSubmit={ (e) => this.props.onRegisterUser(e, this.props.email, this.props.password) }>
            <label>email/login</label>
            <input type="text" name="email" onChange={e => this.props.onSetEmail(e.target.value)} value={this.props.email} />
            <label>password</label>
            <input type="password" name="email" onChange={ e => this.props.onSetPassword(e.target.value)} value={this.props.password} />
            <button>Register</button>
        </form>
          <p>Already having an account <span onClick={this.props.onSetLogin}>Login here</span></p>
          <div style={{fontSize: '13px'}}>for testing: login: demo, password: demo</div>
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

const mapStateToProps = state => {
  return {
    email: state.login.email,
    password: state.login.password,
    login: state.login.login
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onSetEmail: (email) => dispatch(actions.setEmail(email)),
    onSetPassword: (password) => dispatch(actions.setPassword(password)),
    onSetLogin: () => dispatch(actions.setLogin()),
    onLoginUser: (e, email, password, props) => dispatch(actions.loginUser(e, email, password, props)),
    onRegisterUser: (e, email, password) => dispatch(actions.registerUser(e, email, password))
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(Login) ;