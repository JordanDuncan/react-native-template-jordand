/*
 * app/navigators/MainStack/index.js
 * Defines MainTabs and connects it to redux.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import { MainTabs } from './config';

class Tabs extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape().isRequired
  };

  render () {
    const { dispatch, navigation } = this.props;

    return (
      <MainTabs
        ref={ref => {
          this.navigator = ref;
        }}
        navigation={addNavigationHelpers({
          dispatch,
          state: navigation
        })}
      />
    );
  }
}

export default connect(state => ({
  navigation: state.MainTabs
}))(Tabs);