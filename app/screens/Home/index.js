/*
 * app/screens/Home
 */

// import react and react-native elements
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

// import redux functions to connect controller to app state
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as MainStackActions from 'app/redux/MainStack';

// import screens styles
import styles from './styles';

class Home extends Component {
  // Define tab options
  static navigationOptions = () => {
    return {
      title: 'Home',
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => {
        return <Text style={{ color: tintColor }}>dsfsdf</Text>;
      }
    };
  };

  static propTypes = {
    MainStackActions: PropTypes.object
  };

  constructor (props) {
    super(props);

    this.state = {
      test: 'hi'
    };
  }

  /**
   * Open 'Detail' screen
   * @param {String} passedValue
   */
  openDetailPage (passedValue: String) {
    this.props.MainStackActions.openScreen('Detail', {
      passedValue: passedValue
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to React Native!</Text>
        <Button title="Open Detail Page" onPress={this.openDetailPage.bind(this, 'This is passed to detail')} />
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

// export the connect function
export default connect(mapStateToProps, mapDispatchToProps)(Home);
