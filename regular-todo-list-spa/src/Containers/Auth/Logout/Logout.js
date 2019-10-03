import React from 'react';

class Logout extends React.Component {

  componentDidMount() {
    localStorage.removeItem('jwt');
    this.props.history.push('/');
  }

  render() {
    return(
      <>
      </>
    );
  }
};

export default Logout;