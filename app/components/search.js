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
  Image,
  LayoutAnimation,
  Dimensions,
  TouchableOpacity,
  View
} from 'react-native';

var {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';

import Nav from './widgets/nav';


export default class Splash extends Component {
  constructor(props){
    super(props)
    this.state = {
      top:0
    }
  }

  
 
  render() {
    return (
<View style={{flex:1}}>
<Text>SEARCH VIEW</Text>
</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
}}
);

