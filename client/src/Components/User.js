import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import authClient from '../CommonComponents/Auth0/authClient';

class User extends React.Component {

  renderUserName(username) {
    return <span> &nbsp; - {username} </span>;
  }

  render() {
    const profile = authClient.getProfile();

    return (<span className="user__auth">
      {
        profile
          ? this.renderUserName(profile.given_name)
          : null
      }
    </span>);
  }
}

User.propTypes = {
};

export default User;
