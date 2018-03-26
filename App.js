import React, { Component } from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import store from './src/store'
import * as actions from './src/actions';

import { GOOGLE_FIREBASE_CONFIG } from './src/constants/api_keys';
import Navigation from './src/navigation/index';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(GOOGLE_FIREBASE_CONFIG);
  }

  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}

export default App;
