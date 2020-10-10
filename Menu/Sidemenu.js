/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');
let menuData = [
  {name: 'Profile', image: require('./user.png')},
  {name: 'Settings', image: require('./settings.png')},
  {name: 'Demo Videos', image: require('./videos.png')},
  {name: 'Help', image: require('./help.png')},
  {name: 'Power', image: require('./power.png')},
];

class Sidemenu extends React.Component {
  render() {
    return (
      <View style={styles.mainView}>
        <View
          style={{
            marginTop: 60,
            marginLeft: 80,
            width: width - this.props.menuSize,
            justifyContent: 'center',
            height: '90%',
            backgroundColor:'#24aa74',
          }}>
          {this.renderMenu()}
        </View>
      </View>
    );
  }

  renderMenu() {
    return (
      //  menuData.map((item,index)=>{
      // return this.renderItem(item);
    
      menuData.map(item =>this.renderItem(item))
    );
  }

  renderItem(item) {
    return (
      <TouchableOpacity
        key={item.name}
        onPress={() => {
          this.props.onSelectMenu(item.name);
        }}
        style={{
          padding: 10,
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          
        }}>
        <View
          style={{
           padding: 8,
            borderRadius: 5,
           backgroundColor: 'rgba(255,255,255,0.4)',
          }}>
          <Image
            source={item.image}
            style={{tintColor: '#fff', height: 20, width: 20}}
          />
        </View>
        <Text style={styles.titleStyle}>{item.name}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {flex: 1, backgroundColor: '#24aa74'},
  titleStyle: {color: '#fff', fontSize: 18, fontWeight: '500', marginLeft: 10},
});

Sidemenu.defaultProps = {
  menuSize: 150,
};

export default Sidemenu;
