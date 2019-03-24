import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Error } from './CommonComponents';
import { mapStateToProps, mapDispatchToProps, mergeProps } from './utils/mapper';
import RootContainer from './Containers/RootContainer';
// import firebase from './utils/firebase';
// import './theme.css';
import './App.css';
import Logger from './utils/Logger';

class App extends Component {
  async componentWillMount() {

    this.props.setInitializing(false);
  }

  render() {
    Logger.log('foo', 'bar');
    // console.log('foo');

    if (this.props.error !== undefined) {
      return <Error {...this.props} />;
    }

    return <RootContainer {...this.props} />;
  }
}

App.propTypes = {
  error: PropTypes.string,
  setInitializing: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(App);
