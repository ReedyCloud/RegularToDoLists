import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import Lists  from '../Lists/Lists';
import UserSettings from '../../Components/UserSettings/UserSettings.js';

class Layout extends React.Component {
  render () {
    return(
      <>
      <Toolbar />
      <Switch>
        <Route path="/settings" component={UserSettings} />
        <Route path="/lists" exact component={Lists} />
      </Switch>
      </>
    );
  }
};

export default Layout;