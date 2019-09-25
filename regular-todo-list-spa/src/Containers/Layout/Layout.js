import React from 'react';

import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import Lists  from '../Lists/Lists';

class Layout extends React.Component {
  render () {
    return(
      <>
      <Toolbar />
      <Lists />
      </>
    );
  }
};

export default Layout;