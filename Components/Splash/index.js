/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, ImageBackground, Image} from 'react-native';

var gb = require('./green.jpg');
var logo = require('./help.png');

export default class Splash extends Component {

    constructor(props)
    {
        super(props);
        setTimeout(()=>{
            this.props.navigation.navigate('Log');
        },5000 );
    }



  render() {
    return (
      <ImageBackground source={gb} style={{height: '100%', width: '100%'}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={logo}  />
        </View>
      </ImageBackground>
    );
  }
}
