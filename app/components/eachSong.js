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
var Sound = require('react-native-sound');
var duration = 0
var time = 0;
var s;
var refreshIntervalId;


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
      position6:position6,
      icon: "pause",
      paused:false,
      time: 0,
    }
  }
  componentDidMount(){

    setTimeout(() => {this.load()}, 2500);
    setTimeout(() => {this.load()}, 6500);
    setTimeout(() => {this.load()}, 10500);
    setTimeout(() => {this.load()}, 14500);
    setTimeout(() => {this.load()}, 18500);
    setTimeout(() => {this.load()}, 22500);
    setTimeout(() => {this.load()}, 28500);
    setTimeout(() => {this.load()}, 31500);
    setTimeout(() => {this.load()}, 36500);
    setTimeout(() => {this.load()}, 42500);
      this.initSound()
  }

  initSound(){
     s = new Sound('showme.mp3', Sound.MAIN_BUNDLE, (e) => {
      if (e) {
        console.log('error', e);
      } else {
    
            s.play();
             duration = s.getDuration() 
             time = s.getCurrentTime((seconds) => {return seconds});
            this.setItems(duration, 0)
            this.startCount()
      }
    });
  
  }
  play(){
s.play((success) => {
  if (success) {
    duration = s.getDuration() 
             time = s.getCurrentTime((seconds) => {return seconds});
            this.setItems(duration, time)
            this.startCount()
    console.log('successfully finished playing');
  } else {
    console.log('playback failed due to audio decoding errors');
  }
});
  }

  pause(){
    if(this.state.paused){
      this.play()
      this.setState({
        icon: "pause",
        paused:false
      })
    }else{
        s.pause();
        clearInterval(refreshIntervalId);
         this.setState({
        icon: "play-arrow",
        paused:true
      })
      }
  }
  startCount(){
    refreshIntervalId = setInterval(() => this.setState({
      time : this.state.time +1
    }), 1000);
  }

  setItems(x,y){
      this.setState({
      duration: Math.round(x),
      time: Math.round(y)
    })
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
      <TouchableOpacity style={{backgroundColor:'#fd6621', alignItems:'center', justifyContent:'center',  position:'absolute', height:50, width:50, borderRadius:25, left:this.state.position1.left, top:this.state.position1.top}}>
      <Icon name ='star-border' color="#fff" size={25} />
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'#fd6621', alignItems:'center', justifyContent:'center',  position:'absolute', height:50, width:50, borderRadius:25, left:this.state.position2.left, top:this.state.position2.top}}>
      <Icon name ='queue-music' color="#fff" size={25} />
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'#fd6621', alignItems:'center', justifyContent:'center',  position:'absolute', height:50, width:50, borderRadius:25, left:this.state.position3.left, top:this.state.position3.top}}>
      <Icon name ='favorite-border' color="#fff" size={25} />
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'#4c6eab', alignItems:'center', justifyContent:'center',  position:'absolute', height:50, width:50, borderRadius:25, left:this.state.position4.left, top:this.state.position4.top}}>
      <Iconz name ='facebook' color="#fff" size={25} />
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'#17bbee', alignItems:'center', justifyContent:'center',  position:'absolute', height:50, width:50, borderRadius:25, left:this.state.position5.left, top:this.state.position5.top}}>
      <Iconz name ='twitter' color="#fff" size={25} />
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'#4a4a52', alignItems:'center', justifyContent:'center',  position:'absolute', height:50, width:50, borderRadius:25, left:this.state.position6.left, top:this.state.position6.top}}>
      <Icon name ='mail-outline' color="#fff" size={25} />
      </TouchableOpacity>
      </View>
      </View>
      <View style={{flex:2, justifyContent:'center', alignItems:'center'}}>
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{color:'#333', fontSize:17, fontWeight:'600', margin:5}}>Indy</Text>
      <Text style={{color:'#555', fontWeight:'600', margin:5}}>SHOW ME</Text>
      </View>
      <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
      <Text style={{margin:5, color:'#555'}}>{this.state.time}</Text>
       <View style={{height:4, width:303, backgroundColor:'#e3e3e3', borderColor:'rgba(0,0,0,0)', margin:3, borderWidth:1, borderRadius:5}}>
      <View style={{height:3, width: ((this.state.time/this.state.duration) * 303), backgroundColor:'#f94400', borderRadius:5}} />
      </View>
      <Text style={{margin:5, color:'#555'}}>{this.state.duration}</Text>
      </View>

      <View style={{flex:1, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
            <TouchableOpacity style={{height:50, width:50}}><Icon name="fast-rewind" color="#333" size={39} /></TouchableOpacity>
      <TouchableOpacity style={{height:50, width:50}}onPress={() => this.pause()}><Icon name={this.state.icon} color="#333" size={39} /></TouchableOpacity>
            <TouchableOpacity style={{height:50, width:50}}><Icon name="fast-forward" color="#333" size={39} /></TouchableOpacity>

      </View>
      
      </View>
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

