import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainContainer from '../Containers/MainContainer';
import TestContainer from '../Containers/TestContainer';
import Callback from '../CommonComponents/Auth0/Callback';

const Routes = props => (
  <Switch>
    <Route exact path="/" render={() => <MainContainer {...props} />} />
    <Route path="/testbench" render={() => <TestContainer {...props} />} />
    <Route exact path="/callback" component={Callback} />
  </Switch>
);
export default Routes;
