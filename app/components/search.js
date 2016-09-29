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
  ListView,
  TouchableOpacity,
  View
} from 'react-native';

var internet = require('../images/theInternet.jpg');
var sober = require('../images/sober.png');
var royalty = require('../images/royalty.jpg');
var image1 = require('../images/image1.png');
var image2 = require('../images/image2.png');
var image3 = require('../images/image3.png');
var image4 = require('../images/image4.png');
var image5 = require('../images/image5.png');
var image6 = require('../images/image6.png');
var image7 = require('../images/image7.png');


var holderAlbums =[
{
  name: 'The Other Side',
  artist: 'Jason Derulo',
  image: image1
},{
  name: 'Happy',
  artist: 'Pharrel Williams',
  image: image2
},{
  name: 'End Of Time',
  artist: 'Beyonce',
  image: image3
},{
  name: 'Demonds',
  artist: 'Image Dragons',
  image: image4
},{
  name: 'Rolling In The Deep',
  artist: 'Adele',
  image: image5
},
{
  name: 'Work Music',
  artist: '12 Artists',
  image: image6
},{
  name: 'Relaxing',
  artist: '6 Artists',
  image: image7
}
]

var albums = [
  {
    name:'Because the Internet',
    image: internet
  },
    {
    name:'Kauai',
    image: sober
  },
    {
    name:'Royalty',
    image: royalty
  }
]
var {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';

import Nav from './widgets/nav';

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class Splash extends Component {
  constructor(props){
    super(props)
    this.state = {
      top:0,
      dataSource: ds.cloneWithRows(holderAlbums),
      text: ""
    }
  }

  eachAlbum(x){
    return(<View style={{height:210, margin:10, width:180, backgroundColor:'#fff'}}>
      <Image source={x.image} resizeMode="contain" style={{width:180, height:180}} />
        <View style={{backgroundColor:'#fff'}}>
        <Text style={{margin:10, fontSize:12, color:'#666'}}>
        {x.name}
        </Text>
        </View>
        </View>)
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
    <TouchableOpacity onPress = {() => this.props.navigator.push({id:'eachSong'})} >
    <Icon name = "play-circle-outline" size={34} color="backgroundColor:'rgba(220,88,14,0.7)" style={{margin:10}} />
  </TouchableOpacity>
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
eachBlock(x){
  return(<View style={{height:230, margin:10, width:150, backgroundColor:'#fff'}}>
      <Image source={x.image} resizeMode="contain" style={{width:150, height:150}} />
        <View style={{backgroundColor:'#fff'}}>
        <Text style={{margin:10, marginBottom:0, fontSize:12, color:'#666'}}>
        {x.name}
        </Text>
        <Text style={{margin:10, fontSize:12, color:'#666'}}>
        {x.artist}
        </Text>
        </View>
        <View style={{backgroundColor:'#f7f7f7'}}>
        <Text style={{margin:8, fontSize:12, color:'#666'}}>
        Share Album
        </Text></View>
        </View>) 
}

 discover(){
  return(
    <ListView
    dataSource = {this.state.dataSource}
    contentContainerStyle = {{justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap'}}
    renderRow = {(rowData) => this.eachBlock(rowData)}/>
    )
 }

 renderArtist(){
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  if(this.state.text == "Childish"){
      return (
  <View style={{flex:1}} >
  <View>
    {this.loaded()}
    </View>
    <ScrollView horizontal={true} style={{flex:1}}>
    {this.eachAlbum(albums[0])}
    {this.eachAlbum(albums[1])}
    {this.eachAlbum(albums[2])}
    </ScrollView>
  </View>)}else{
        return this.discover();
      }
 }


  render() {
    return (
<View style={{flex:1, backgroundColor:'#e9e9e9'}}>
<TextInput
  placeholder = "Search"
  placeholderTextColor ="#f4f4f4"
  onChangeText={(text) => this.setState({text})}
  style={{height:50, width:width, backgroundColor:'#1f232c', color:'#fff', padding:10}} />
  <Icon name = "search" color='#fff' size={20} style={{position:'absolute', right:10, top:15, backgroundColor:'rgba(0,0,0,0)'}} />
  {this.renderArtist()}
</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
}}
);

