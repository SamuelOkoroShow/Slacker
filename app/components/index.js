import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  View
} from 'react-native';

import Clips from './clips'
import Home from './home'
import News from './news'
import Shop from './shop'
import Show from './show'
import EachArticle from './eachArticle'



export default class Index extends Component {
  constructor(props){
    super(props)
 
  }
 
  renderScene(route, navigator) {
    var {state,actions} = this.props;
    var routeId = route.id;

    if (routeId === 'home') {
      return (
        <Home
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'news') {
      return (
        <News
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'shop') {
      return (
        <Shop
        {...this.props} 
        navigator={navigator} />
        );
    }if (routeId === 'show') {
      return (
        <Show
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'eachArticle') {
      return (
        <EachArticle
        {...this.props} 
        navigator={navigator} />
        );
    }
  
   }


  render() {
    return (
      <View style={{flex:1}}>
     <Navigator
     style={{flex: 1}}
     ref={'NAV'}
     initialRoute={{id: 'home', name: 'home'}}
     renderScene={this.renderScene.bind(this)}/>
        </View>
    )
}
}
