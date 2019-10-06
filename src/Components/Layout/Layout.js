import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FullList from '../../Containers/Lists/FullList/FullList';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import Lists  from '../../Containers/Lists/Lists';
import UserSettings from '../../Components/UserSettings/UserSettings.js';
import Login from '../../Containers/Auth/Login/Login';
import AuthComponent from '../../Containers/Auth/AuthComponent';
import Logout from '../../Containers/Auth/Logout/Logout';

class Layout extends React.Component {
  render () {
    return(
      <>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/logged"  component={AuthComponent} >
        <Toolbar />
        <Route path="/logged/settings" component={UserSettings} />
        <Route path="/logged/logout" component={Logout} />
        <Route path="/logged/lists" exact component={Lists} />
        <Route path="/logged/lists/:id/:title" exact component={FullList} />
        </Route>
      </Switch>
      </>
    );
  }
};

export default Layout;