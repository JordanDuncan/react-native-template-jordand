/*
 * app/index.js
 * Cross platform entry point for your app.
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, AsyncStorage, Platform } from 'react-native';

// import redux provider to wrap whole app in
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import FilesystemStorage from 'redux-persist-filesystem-storage';

import { store } from 'app/config/store';

import MainStack from 'app/navigators/MainStack';

console.ignoredYellowBox = ['You should only render'];

type Props = {};
type State = { isLoggedIn: boolean, loaded: boolean };

class Root extends Component<Props, State> {
  state = {
    isLoggedIn: false,
    loaded: false
  };

  store: {};

  constructor (props) {
    super(props);
    this.store = store;

    // set redux-persist options to store data
    persistStore(this.store, {
      storage: Platform.OS === 'ios' ? AsyncStorage : FilesystemStorage,
      whitelist: ['TestData']
    });
  }

  render () {
    return (
      <Provider store={this.store}>
        <MainStack />
      </Provider>
    );
  }
}

// register this as the root component in the app
AppRegistry.registerComponent('HelloWorld', () => Root);

export default Root;
