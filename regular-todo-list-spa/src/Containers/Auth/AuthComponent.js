import React from 'react';
import { getJwt } from './helpers/jwt';
import axios from '../../Axios/axios';

class AuthComponent extends React.Component {

  state = {
    user: undefined
  }

  componentDidMount() {
    const jwt = getJwt();
    if(!jwt) {
      this.props.history.push('/');
    }
    axios.get('/getUser', {headers:{Authorization: `Bearer ${jwt}`}}).then( res => {
      console.log(res);
      this.setState({
        user: res.data
      });
    });

  }

  render () {
  return(
    <div>
      {this.props.children}
    </div>
  );
  }
};

export default AuthComponent;