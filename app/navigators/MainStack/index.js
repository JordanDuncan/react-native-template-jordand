/*
 * app/routers/MainStack/index.js
 * Defines MainStack and connects it to redux.
 */

import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import PropTypes from 'prop-types';

import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import { MainStack, addReduxListener } from './config';

class Stack extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape().isRequired
  };

  constructor (props: {}) {
    super(props);
    BackHandler.addEventListener('hardwareBackPress', this.backAction);
  }

  backAction = () => this.navigator.props.navigation.goBack();

  render () {
    const { dispatch, navigation } = this.props;
    const addListener = addReduxListener();

    return (
      <MainStack
        ref={ref => {
          this.navigator = ref;
        }}
        navigation={addNavigationHelpers({
          dispatch,
          state: navigation,
          addListener
        })}
      />
    );
  }
}

// connect redux state to MainStack props.
export default connect(state => ({
  navigation: state.MainStack
}))(Stack);
