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
  Dimensions,
  TouchableOpacity,
  View
} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class Slide3 extends Component {
  render() {
    return (
      <TouchableOpacity onPress = {() => this.props.navigator.push({id:'main'})} style={styles.container}>
      <Image source = {require('../../images/zak.png')} resizeMode="contain" style={{flex:1, width:null, height:null}}>
      <Image source = {require('../../images/overlay2.png')} resizeMode="contain" style={{flex:1, width:null, height:null, }}>
      <View style={{flex:9, alignItems:'center', justifyContent:'center'}}>
      <Text style={{color:'#ff7007', fontWeight:'600', margin:3, textAlign:'center', marginLeft:9, letterSpacing: 3, fontSize:30}}>SLACKER</Text>
      <View>
      <Text style={{color:'#fff', fontSize:11, fontWeight:'600'}}>RADIO</Text>
      </View>
      <Text style={{color:'#fff', letterSpacing: 4, fontSize:19, margin:10, width:250, textAlign:'center', fontWeight:'400'}}>ZAK DOWNTOWN COLLECTION</Text>
      </View>
      <View style={{flex:1, alignItems:'center'}}>
            <Image source={require('../../images/logo1.png')} resizeMode = 'contain' style={{height:40,width:40, margin:5, marginTop:0}} />
      <Text style={{fontSize:10, color:'#ff7007'}}>WWW.SLACKER.COM</Text>
      </View>
      </Image>
      </Image>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:height,
    width:width
}}
);

