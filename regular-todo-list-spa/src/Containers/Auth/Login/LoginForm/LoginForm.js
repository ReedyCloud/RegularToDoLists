import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../../store/actions/index';
import Test from '../../../../assets/images/test.png';
import styles from './LoginForm.module.scss';
import { withRouter } from'react-router-dom'

class LoginForm extends React.Component {

  state = {
    email: '',
    password: ''
  }

  formValidation = (e) => {
    e.preventDefault();
    this.props.onLoginUser( this.state.email, this.state.password, this.props);
  }

  inputChange = (e) => {
    this.setState({
      [e.target.name]:  e.target.value,
      valid: true
    });
    this.props.onErrorReset();
  }
  errReset =()=>{
    this.props.onErrorReset();
    this.props.clicked();
  }

  render () {

    let validInput = this.props.error ? styles.InvalidInput :styles.Input;
  return(
    <div className={styles.FormContainer} >
      <form className={styles.Form} onSubmit={e => this.formValidation(e)}>
        <input required type="email" name='email' placeholder="Email..." className={validInput} onChange={(e)=> this.inputChange(e)} value={this.state.email} />
        <input required type="password" name='password' placeholder="Password..." className={validInput} onChange={(e)=> this.inputChange(e)} value={this.state.password} />
        {this.props.error ?  <p>Wrong password or email</p> : null}
        <button className={styles.Button} >Sign In</button>
        <p> Don't have an account? <a onClick={this.errReset}>Sign Up! </a></p>
        <div style={{marginTop: '30px', textAlign: 'center', fontSize: '90%'}}>
          demo: email: <strong>test@test.pl</strong> password: <strong>test</strong>
        </div>
      </form>
      <img src={Test} className={styles.Image} />
      
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
    onErrorReset: () => dispatch(actions.resetError()),
    onSetLogin: () => dispatch(actions.setLogin()),
    onLoginUser: (email, password, props) => dispatch(actions.loginUser( email, password, props))
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm));