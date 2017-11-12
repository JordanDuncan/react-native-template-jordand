/*
 * app/index.js
 * Cross platform entry point for your app.
 */

import React, { Component } from 'react';
import { AppRegistry, AsyncStorage, Platform } from 'react-native';

// import redux provider to wrap whole app in
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import FilesystemStorage from 'redux-persist-filesystem-storage';

import { store } from 'app/config/store';

import MainStack from 'app/navigators/MainStack';

class Root extends Component {
  state = {
    isLoggedIn: false,
    loaded: false
  };

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

AppRegistry.registerComponent('TestHello', () => Root);

export default Root;
