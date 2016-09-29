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
import Slide1 from './widgets/slide1'
import Slide2 from './widgets/slide2'
import Slide3 from './widgets/slide3'
import HomeW from './widgets/homeW'

export default class Home extends Component {

  home(){
    return (
       
      <Image source ={require('../images/back.png')} resizeMode = 'contain' style={{flex:1, justifyContent:'center',alignItems:'center', height:null, width:null}}>
      <View style={{flex:19, alignItems:'center', justifyContent:'center'}}>
      <Image source={require('../images/logo1.png')} resizeMode = 'contain' style={{height:70,width:70, margin:5, marginTop:0}} />
      <Text style={{color:'#ff7007', fontWeight:'500', marginLeft:9, letterSpacing: 3, fontSize:30}}>SLACKER</Text>
      <Text style={{color:'#fff', fontSize:11, fontWeight:'600'}}>RADIO</Text>
      </View>
      <View style={{flex:1}}>
      <Text style={{fontSize:10, color:'#ff7007'}}>WWW.SLACKER.COM</Text>
      </View>
      </Image>
    );
  }
  render() {
    return (
      <View style={styles.container}>
     
      <View>
      <Slide1 />
      <Slide2 />
      <Slide3 {...this.props} />

      </View>
       <HomeW />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row'
}}
);

