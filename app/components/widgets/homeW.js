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

export default class HomeWid extends Component {
  constructor(props){
    super(props)

    this.state = {
     left:0
    }
  }

  minimize(){
         LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
    this.setState({
      left: width * -1
    })

  }
  render() {
    return (
      <TouchableOpacity onPress={() => this.minimize()} style={{position:'absolute', top:0, left:this.state.left, height:height, width:width}}>
      <Image source ={require('../../images/back.png')} resizeMode = 'contain' style={{flex:1, justifyContent:'center',alignItems:'center', height:null, width:null}}>
      <View style={{flex:19, alignItems:'center', justifyContent:'center'}}>
      <Image source={require('../../images/logo1.png')} resizeMode = 'contain' style={{height:50,width:50, margin:5, marginTop:0}} />
      <Text style={{color:'#ff7007', fontWeight:'500', marginLeft:9, letterSpacing: 3, fontSize:30}}>SLACKER</Text>
      <Text style={{color:'#fff', fontSize:11, fontWeight:'600'}}>RADIO</Text>
      </View>
      <View style={{flex:1}}>
      <Text style={{fontSize:10, color:'#ff7007'}}>WWW.SLACKER.COM</Text>
      </View>
      </Image>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  }
);

