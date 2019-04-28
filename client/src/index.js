/* eslint-disable global-require */
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { reducer as form } from 'redux-form';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logger from 'redux-logger';
import appReducer from './reducers';
import App from './App';
import ApolloClient from 'apollo-boost';
import registerServiceWorker from './registerServiceWorker';
import './Font.css';
import './index.css';

const middlewares = [thunk];

// middlewares.push(logger);

const preloadedState = window.__PRELOADED_STATE__ || {};
delete window.__PRELOADED_STATE__;

const reducer = combineReducers({
  app: appReducer,
  form,
  preloaded: () => preloadedState,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const store = createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)));
ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App id="root-app" />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
