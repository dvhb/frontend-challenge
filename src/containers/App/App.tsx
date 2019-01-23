import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'connected-react-router';

import { configureStore, history } from '../../store';
import { Routes } from '../../Routes';

export class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    );
  }
}
