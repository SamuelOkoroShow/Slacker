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
var i;
export default class Splash extends Component {
  constructor(props){
    super(props)
    this.state = {
      width:0
    }
  }
  componentDidMount(){
      this.setState({
        width: 10
      })

  }
  render() {
    return (
      <View style={styles.container}>
      <View style={{flex:19, alignItems:'center', justifyContent:'center', paddingBottom:100}}>
      <Image source={require('../images/logo2.png')} resizeMode ="contain" style={{height:50, width:50, margin:5}} />
      <Text style={{color:'#fff', letterSpacing:4, fontWeight:'600', fontSize:12, margin:5}}>SLACKER RADIO</Text>
      <View style={{height:5, width:170, backgroundColor:'rgba(255,255,255,0.3)', borderColor:'rgba(0,0,0,0)', margin:3, marginTop:12, borderWidth:1, borderRadius:5}}>
      <View style={{height:4, width: this.state.width, backgroundColor:'#fff', borderRadius:5}} />
      </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f36b21'
}}
);

