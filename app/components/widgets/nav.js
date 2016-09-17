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

export default class Slide1 extends Component {
  constructor(props){
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <View style={{height:50, justifyContent:'space-between', flexDirection:'row', alignItems:'center'}}>
      <TouchableOpacity style={{ justifyContent:'center', padding:10}}>
      <Icon name="menu" color="#444" size={21} />
      </TouchableOpacity>
      <Text>{this.props.text}</Text>
       <TouchableOpacity style={{ justifyContent:'center', padding:10}}>
      <Icon name="equalizer" color="#dd580d" size={21} />
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  }
);

