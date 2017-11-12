/*
 * app/screens/Detail
 */

// import react and react-native elements
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

// import redux functions to connect controller to app state
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as MainStackActions from 'app/redux/MainStack';

import FancyText from 'app/components/FancyText';

// import screens styles
import styles from './styles';

class Home extends Component {
  static propTypes = {};

  /**
   * Construct component class
   * @param {object} props
   */
  constructor (props) {
    super(props);

    this.state = {
      timestamp: new Date().getTime()
    };

    this.navState = this.props.navigation.state;
  }

  /**
   * Set a timestamp in the component state
   */
  setTime () {
    this.setState({
      timestamp: 'hello'
    });
  }

  /**
   * Go back to the previous page in the stack
   */
  goBack () {
    this.props.MainStackActions.goBack();
  }

  /**
   * Render component
   */
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.timestamp}</Text>
        <Text style={styles.text}>{this.navState.params.passedValue}</Text>
        <FancyText>This is FancyText</FancyText>
        <Button title="Set Timestamp" onPress={this.setTime.bind(this)} />
        <Button title="Go Back" onPress={this.goBack.bind(this)} />
      </View>
    );
  }
}

/**
 * Map component props to redux app state
 * @param {*} state - the redux app state
 */
const mapStateToProps = state => ({});

/**
 * Bind redux actions to component
 * @param {*} dispatch
 */
const mapDispatchToProps = dispatch => ({
  MainStackActions: bindActionCreators(MainStackActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
