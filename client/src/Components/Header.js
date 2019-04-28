import React from 'react';
import authClient from '../CommonComponents/Auth0/authClient';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import './Header.css';
import User from './User';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  login() {
    authClient.signIn();
  }

  logout() {
    authClient.signOut();
    this.setState({ isSignedIn: false });
  }

  renderLoginButton() {
    return (
      <Button color="primary" onClick={this.login}>
        {' '}
        Log In{' '}
      </Button>
    );
  }

  renderLogoutButton() {
    return (
      <Button color="primary" onClick={this.logout}>
        {' '}
        Log Out{' '}
      </Button>
    );
  }
  render() {
    const isAuthenticated = authClient.isAuthenticated();
    return (
      <div className="header">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <span className="logo" />
            Fluxcraft
            <User {...this.props} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {!isAuthenticated && this.renderLoginButton()}
                {isAuthenticated && this.renderLogoutButton()}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
