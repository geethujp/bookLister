/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Splash from './Splash'

export default class bookLister extends Component {
  render() {
    return (
      <Splash/>
    );
  }
}

AppRegistry.registerComponent('bookLister', () => bookLister);
