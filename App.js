import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { store, persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import * as actions from './src/actions';
import { GOOGLE_FIREBASE_CONFIG } from './src/constants/api_keys';
import Navigation from './src/navigation/index';
import { BUTTON_COLOR } from './src/constants/style';

class App extends Component {

  //////////////////////////////////////////////////////////////////////////////
  // Setup some warnings to ignore
  // https://github.com/firebase/firebase-js-sdk/issues/97
  constructor() {
    super();
    console.disableYellowBox = true;
  }

  componentWillMount() {
    firebase.initializeApp(GOOGLE_FIREBASE_CONFIG);
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={
          <View style = {styles.loadingStyle}>
            <ActivityIndicator
              size='large'
              color={BUTTON_COLOR}
            />
          </View>
        } persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    );
  }
}

const styles = {
  loadingStyle: {
    flex: 1,
    justifyContent: 'center'
  }
}

export default App;
