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
      top: height * -1
    }
  }

  componentDidMount(){
        setTimeout(() => {this.animate()}, 1000);
  }

  animate(){
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      top:0
    })
  }

  overLay(){
    return(
      <View style={{position:'absolute', height:height, width:width, top:this.state.top, left:0, backgroundColor:'rgba(255,255,255,0.75)'}}>
<Nav />
<View style={{flex:9, alignItems:'center', justifyContent:'space-around'}}>
<View style={{ alignItems:'center', }}>
<Image source={require('../images/logo1.png')} resizeMode="contain" style={{width:45, height:45}} />
<Text style={{fontSize:16, color:'#444', fontWeight:'600', marginTop:10}}>SLACKER RADIO</Text>
<Text style={{textAlign:'center', fontWeight:'500', fontSize:13, margin:6, width:250, color:'#444'}}>HAND CRAFTED TO DELIVER THE PERFECT MUSIC FOR ANY MOMENT</Text>
</View>
<View style={{flexDirection:'row', justifyContent:'space-around', width:280, margin:10}}>
<TouchableOpacity onPress={() => this.props.navigator.push({id:'search'})}><View style={{height:100, margin:10, width:100, borderRadius:50, alignSelf:'center', backgroundColor:'#dd580d', alignItems:'center', justifyContent:'center'}}><Icon name="search" color="#fff" size={40} /></View>
<Text style={{fontWeight:'600', fontSize:15, color:'#666', textAlign:'center', margin:8}}>SEARCH</Text>
<Text style={{fontSize:11, color:'#666', }}>ARTIST OR GENRE</Text>
</TouchableOpacity>
<TouchableOpacity><View style={{height:100, margin:10, width:100, borderRadius:50, alignSelf:'center', backgroundColor:'#222', alignItems:'center', justifyContent:'center'}}><Icon name="mic-none" color="#fff" size={50} /></View>
<Text style={{fontWeight:'600', fontSize:15, color:'#666', textAlign:'center', margin:8}}>BROWSE</Text>
<Text style={{fontSize:11, color:'#666', }}>SLACKER STATIONS</Text>
</TouchableOpacity>
</View>
<View />
</View>
<View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text style={{color:'#666',fontSize:12, fontWeight:'600'}}>WWW.SLACKER.COM</Text>
      <Text style={{color:'rgba(0,0,0,0.6)', fontWeight:'400', margin:5, fontSize:11}}>A PERSONALIZED RADIO EXPERIENCE</Text>
  </View>
</View>
)
  }
 
  render() {
    return (
      <Image source={require('../images/party.png')} resizeMode="contain" style={{flex:1, height:null, width:null}}>
      {this.overLay()}
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(220,88,14,0.87)'
}}
);

