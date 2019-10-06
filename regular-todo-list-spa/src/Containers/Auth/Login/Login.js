import React from 'react';
import { connect } from 'react-redux';

import Header from '../../../Components/Navigation/Header/Header';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';
import Footer from '../../../Components/Navigation/Footer/Footer';
import styles from './Login.module.scss';
import * as actions from '../../../store/actions/index';

class Login extends React.Component {
  
  render () {

    let form = this.props.login ? 
    <LoginForm clicked={this.props.onSetLogin}  /> :
    <RegisterForm  clicked={this.props.onSetLogin} />;

  return(
    <>
    <Header />
    <div className={styles.Container}>
     {form}
    </div>
    <Footer />
    </>
  );
  }
};

const mapStateToProps = state => {
  return {
    login: state.login.login,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onSetLogin: () => dispatch(actions.setLogin()),
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(Login);