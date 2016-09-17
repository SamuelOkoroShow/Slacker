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

    setTimeout(() => {this.load()}, 500);
    setTimeout(() => {this.load()}, 1200);
    setTimeout(() => {this.load()}, 1500);
    setTimeout(() => {this.load()}, 1800);
    setTimeout(() => {this.load()}, 2300);
    setTimeout(() => {this.load()}, 2700);
    setTimeout(() => {this.load()}, 3100);
  }
  load(){
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    if(this.state.width < 170){
      this.setState({
        width: this.state.width + 30
      })
    }else{
      this.props.navigator.push({
        id: "home"
      })
    }
  }
  render() {
    return (
      <Image source ={require('../images/rhianna.png')} resizeMode="contain" style={{flex:1, width:null, height:null}} >
      <View style={styles.container}>
      <View style={{flex:9, alignItems:'center', justifyContent:'center', paddingBottom:100}}>
      <Image source={require('../images/logo2.png')} resizeMode ="contain" style={{height:50, width:50, margin:5}} />
      <Text style={{color:'#fff', letterSpacing:4, fontWeight:'600', fontSize:12, margin:5}}>SLACKER RADIO</Text>
      <View style={{height:4, width:183, backgroundColor:'rgba(255,255,255,0.3)', borderColor:'rgba(0,0,0,0)', margin:3, marginTop:32, borderWidth:1, borderRadius:5}}>
      <View style={{height:3, width: this.state.width, backgroundColor:'#fff', borderRadius:5}} />
      </View>
      </View>
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text style={{color:'#fff',fontSize:12, fontWeight:'600'}}>WWW.SLACKER.COM</Text>
      <Text style={{color:'rgba(255,255,255,0.6)', fontWeight:'400', margin:5, fontSize:11}}>A PERSONALIZED RADIO EXPERIENCE</Text>
      </View>
      </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(220,88,14,0.7)'
}}
);

