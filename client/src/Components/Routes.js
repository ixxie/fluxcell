import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainContainer from '../Containers/MainContainer';
import Callback from '../CommonComponents/Auth0/Callback';

const Routes = () => (
  <Switch>
    <Route exact path="/" render={() => <MainContainer />} />
    <Route exact path="/callback" component={Callback} />
  </Switch>
);
export default Routes;
