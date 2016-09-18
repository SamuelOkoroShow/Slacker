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
  TextInput,
  ScrollView,
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

  
 loaded(){
  return(
    <View>
<View style={{ backgroundColor:'#fff'}}>
<View style={{flexDirection:"row",}}>
<Image source={require('../images/childish.png')} resizeMode="cover" style={{height:60, width:60, margin:10}} />
<View style={{justifyContent:'center'}}>
<Text style={{color:'#333', fontSize:13, fontWeight:'700'}}>Childish Gambino</Text>
<Text style={{color:'#777', fontSize:12}}>Artist</Text>
</View>

</View>
<Text style={{ marginLeft:10, fontSize:12, fontWeight:'600', color:'#555'}}>NOW PLAYING ON</Text>
  <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', borderBottomWidth:1, borderColor:'#f7f7f7'}}>
    <Image source={require('../images/top40.png')} resizeMode="contain" style={{height:50, width:50, margin:10}} />
    <View>
     <Text style={{color:'#444', fontSize:14, fontWeight:'600'}}>Slacker Top 40</Text>
    <Text style={{color:'#555', fontSize:12}}>Childish Gambino: Royalty</Text>
    </View>
    <Icon name = "play-circle-outline" size={34} color="backgroundColor:'rgba(220,88,14,0.7)" style={{margin:10}} />
  </View>
  <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', borderBottomWidth:1, borderColor:'#f7f7f7'}}>
    <Image source={require('../images/popHit.png')} resizeMode="contain" style={{height:50, width:50, margin:10}} />
    <View>
     <Text style={{color:'#444', fontSize:14, fontWeight:'600'}}>Slacker Pop Hits</Text>
    <Text style={{color:'#555', fontSize:12}}>Childish Gambino: Royalty</Text>
    </View>
    <Icon name = "play-circle-outline" size={34} color="backgroundColor:'rgba(220,88,14,0.7)" style={{margin:10}} />
  </View>
  <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', borderBottomWidth:1, borderColor:'#f7f7f7'}}>
    <Image source={require('../images/slack2014.png')} resizeMode="contain" style={{height:50, width:50, margin:10}} />
    <View>
     <Text style={{color:'#444', fontSize:14, fontWeight:'600'}}>2014 Slacker Pop</Text>
    <Text style={{color:'#555', fontSize:12}}>Childish Gambino: Royalty</Text>
    </View>
    <Icon name = "play-circle-outline" size={34} color="backgroundColor:'rgba(220,88,14,0.7)" style={{margin:10}} />
  </View>
</View>
<View style={{flex:1}}>
<Text style={{color:'#555', fontWeight:'600', margin:10, marginTop:20}}>Top Albums</Text>
</View>
</View>
    )
 }
  render() {
    return (
<View style={{flex:1, backgroundColor:'#e3e3e3'}}>
<TextInput
  style={{height:50, width:width, backgroundColor:'#1f232c', color:'#fff', padding:10}} />
  {this.loaded()}
  <ScrollView horizontal={true}></ScrollView>
</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
}}
);

