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
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/FontAwesome';
import Nav from "./widgets/nav.js"

var position1 = {
  left:101,
  top:-25
}
var position2 = {
  left:98,
  top:218
}
var position3 = {
  left:-5,
  top:30
}
var position4 = {
  left:200,
  top:160
}
var position5 = {
  left:-5,
  top:160
}
var position6 = {
 left:200,
  top:30
}
var count = 0;

export default class EachSong extends Component {
  constructor(props){
    super(props)
    this.state = {
      width:0,
      position1:position1,
      position2:position2,
      position3:position3,
      position4:position4,
      position5:position5,
      position6:position6
    }
  }
  componentDidMount(){

    setTimeout(() => {this.load()}, 2500);
    setTimeout(() => {this.load()}, 6500);
    setTimeout(() => {this.load()}, 10500);
    setTimeout(() => {this.load()}, 14500);
    setTimeout(() => {this.load()}, 18500);
 
  }

  load(){
    count++
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)

    if(count == 1){
      this.setState({
        position1:position6,
        position2:position5,
        position3:position4,
        position4:position3,
        position5:position2,
        position6:position1,
      }) }else if (count == 2){
      this.setState({
        position1:position2,
        position2:position3,
        position3:position4,
        position4:position5,
        position5:position6,
        position6:position1,
      })}else {
        count = 0
      this.setState({
        position1:position4,
        position2:position5,
        position3:position1,
        position4:position2,
        position5:position3,
        position6:position6,
      })
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
      <Nav text="Show Me | Indy" />
      <View style={{flex:1}}>
      <View style={{flex:3 , justifyContent:'center', alignItems:'center'}}>
      <View style={{borderColor:'#fd6621', height:250, width:250, borderWidth:2, borderRadius:125, justifyContent:'center', alignItems:'center'}}>
      <Image source = {require('../images/image1.png')} resizeMode="contain" style={{height:150, width:150, borderRadius:75 }} />
      <View style={{backgroundColor:'#fd6621', alignItems:'center', justifyContent:'center',  position:'absolute', height:50, width:50, borderRadius:25, left:this.state.position1.left, top:this.state.position1.top}}>
      <Icon name ='star-border' color="#fff" size={25} />
      </View>
      <View style={{backgroundColor:'#fd6621', alignItems:'center', justifyContent:'center',  position:'absolute', height:50, width:50, borderRadius:25, left:this.state.position2.left, top:this.state.position2.top}}>
      <Icon name ='queue-music' color="#fff" size={25} />
      </View>
      <View style={{backgroundColor:'#fd6621', alignItems:'center', justifyContent:'center',  position:'absolute', height:50, width:50, borderRadius:25, left:this.state.position3.left, top:this.state.position3.top}}>
      <Icon name ='favorite-border' color="#fff" size={25} />
      </View>
      <View style={{backgroundColor:'#4c6eab', alignItems:'center', justifyContent:'center',  position:'absolute', height:50, width:50, borderRadius:25, left:this.state.position4.left, top:this.state.position4.top}}>
      <Iconz name ='facebook' color="#fff" size={25} />
      </View>
      <View style={{backgroundColor:'#17bbee', alignItems:'center', justifyContent:'center',  position:'absolute', height:50, width:50, borderRadius:25, left:this.state.position5.left, top:this.state.position5.top}}>
      <Iconz name ='twitter' color="#fff" size={25} />
      </View>
      <View style={{backgroundColor:'#4a4a52', alignItems:'center', justifyContent:'center',  position:'absolute', height:50, width:50, borderRadius:25, left:this.state.position6.left, top:this.state.position6.top}}>
      <Icon name ='mail-outline' color="#fff" size={25} />
      </View>
      </View>
      </View>
      <View style={{flex:2}}></View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
}}
);

