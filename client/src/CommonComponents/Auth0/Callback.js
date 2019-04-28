/* eslint class-methods-use-this: 0 */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import auth0Client from './authClient';
import { LoadingSpinner, withContainer } from '../index';
import { createUser } from '../../utils/clientHelper';

class Callback extends Component {
  async componentDidMount() {
    await auth0Client.handleAuthentication();

    const profile = JSON.parse(sessionStorage.getItem('profile'));

    const res = await createUser({ userName: profile.name, email: '', spaceId: 1 });
    debugger;
    this.props.history.replace('/');
  }

  render() {
    const LoadingSpinnerWithContainer = withContainer(LoadingSpinner);
    return <LoadingSpinnerWithContainer text="Loading profile..." />;
  }
}

export default withRouter(Callback);
