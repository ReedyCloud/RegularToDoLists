import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../../store/actions/index';
import Test from '../../../../assets/images/test.png';
import styles from './RegisterForm.module.scss';
import { withRouter } from'react-router-dom'

class RegisterForm extends React.Component {

  state = {
    email: '',
    username: '',
    password: '',
    passwordConfirmed: '',
    valid: true
  }

  formValidation = (e) => {
    e.preventDefault();
    if(this.state.password !== this.state.passwordConfirmed) {
      this.setState({valid: false});
      return;
    }
    this.props.onRegisterUser( this.state.email, this.state.password, this.props);
  }

  inputChange = (e) => {
    this.setState({
      [e.target.name]:  e.target.value,
      valid: true
    });
    if(e.target.name === 'email'){
      this.props.onErrorReset();
    }
  }


  render () {

    let validPassword = this.state.valid ? styles.Input : styles.InvalidInput;
    let validEmail = this.props.error ? styles.InvalidInput : styles.Input ;
  return(
    <div className={styles.FormContainer} >
      <img src={Test} className={styles.Image} />
      <form className={styles.Form} onSubmit={e => this.formValidation(e)}>
        <input required type="email" name='email' placeholder="Email..." className={validEmail} onChange={(e)=> this.inputChange(e)} value={this.state.email} />
        {this.props.error ?  <p>Email already registered</p> : null}
        <input required type="text" name='username' placeholder="Username..." className={styles.Input} onChange={(e)=> this.inputChange(e)} value={this.state.username} />
        <input required type="password" name='password' placeholder="Password..." className={validPassword} onChange={(e)=> this.inputChange(e)} value={this.state.password} />
        <input required type="password" name='passwordConfirmed' placeholder="Confirm Password..." className={validPassword} onChange={(e)=> this.inputChange(e)} value={this.state.passwordConfirmed} />
        {this.state.valid ? null : <p>Passwords are not identical.</p>}
        <button className={styles.Button} >Sign Up</button>
        <p> Already have an account? <a onClick={this.props.clicked}>Sign in!</a></p>
      </form>
    </div>
  );
  }
};

const mapStateToProps = state => {
  return {
    email: state.login.email,
    password: state.login.password,
    login: state.login.login,
    error: state.login.error
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onSetLogin: () => dispatch(actions.setLogin()),
    onRegisterUser: (email, password, props) => dispatch(actions.registerUser( email, password, props)),
    onErrorReset: () => dispatch(actions.resetError())
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegisterForm));