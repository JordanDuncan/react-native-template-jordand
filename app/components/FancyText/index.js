/*
 * app/components/FancyText
 */

// import react and react-native elements
import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

// import screens styles
import styles from './styles';

class FancyText extends Component {
  static propTypes = {};

  /**
   * Construct component class
   * @param {object} props
   */
  constructor (props: {}) {
    super(props);
  }

  /**
   * Render component
   */
  render () {
    return (
      <Text style={styles.text}>{this.children}</Text>
    );
  }
}

export default FancyText;
