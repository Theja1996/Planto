/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import {
    View,
    Text,
    StyleSheet,
   Image,
    SafeAreaView,
    ImageBackground,
  } from 'react-native';
  import React, {Component} from 'react';
  import Accordion  from 'react-native-collapsible/Accordion';
  import * as Animatable from 'react-native-animatable';
  //import CheckBoxExample from '../Gallery/heart';
  
  
  const SECTIONS =  [
    {
      title: 'නෙලුම්-Lotus',
      content1:'Scientific Name',
      content2: 'Nelumbo nucifera  ',
      content3:'Common Names',
      content4:'Nelum ,Lotus',
      image: <Image source={require('../images/aqua/Nelum.png')} />,
    },
    {
      title: 'සුදු නෙලුම්-White Lotus',
      content1:'Scientific Name',
      content2: 'Nelumbo nucifera',
      content3:'Common Names',
      content4:'White Lotus ,Sudu nelum  ',
      image: <Image  source={require('../images/aqua/Sudunelum.png')}   />,
    },
    {
      title: 'ඔීලු-Olu',
      content1:'Scientific Name',
      content2: 'Nymphaea pubescens',
      content3:'Common Names',
      content4:'Olu  ',
      image: <Image  source={require('../images/aqua/Olu.png')}   />,
    },
    {
      title: 'නිල් මානෙල්-Blue water Lily ',
      content1:'Scientific Name',
      content2: 'Nymphaea caerulea',
          content3:'Common Names',
      content4:'Blue water lily ,nil manel ,Egyptian lotus',    
      image: <Image  source={require('../images/aqua/nilmanel.png')}   />,
     },
     {
      title: 'මානෙල්-Red Water Lily',
      content1:'Scientific Name',
      content2: 'Nymphaea pubescens',
      content3:'Common Names',
      content4:'Olu  ',
      image: <Image  source={require('../images/aqua/manel.png')}   />,
     },
     {
      title: 'කුමුදු-Kumudu',
      content1:'Scientific Name',
      content2: 'Nymphoides indica',
      content3:'Common Names',
      content4:'Kumudu ',
      image: <Image  source={require('../images/aqua/Kumudu.png')}   />,
     },
     {
      title: 'කිරල-Apple mangrove',
      content1:'Scientific Name',
      content2: 'Sonneratia alba',
      content3:'Common Names',
      content4:'Apple mangrove ,Kirala  ',
      image: <Image  source={require('../images/aqua/Kirala.png')}   />,
     },
     
  
  ];
  
  
  class AquaScreen extends Component {
   state = {
      activeSections: [],
    };
  
    _renderHeader(section, index, isActive, sections) {
      return (
  
        <Animatable.View
          duration={300}
          transition="backgroundColor"
          style={{ backgroundColor: (isActive ? 'rgba(255,255,255,1)' : 'rgba(245,252,255,1)') }}>
          <Text style={styles.headerText}>{section.title} </Text>
            
         
             </Animatable.View> 
      );
    }
  
  
   _renderContent(section, i, isActive, sections,props) {
      return (
        <Animatable.View
          duration={300}
          transition="backgroundColor"
          style={{ backgroundColor: (isActive ? 'rgba(255,255,255,1)' : 'rgba(245,252,255,1)') }}>
          <Animatable.Text
            duration={300}
            easing="ease-out"
            animation={isActive ? 'zoomIn' : false}>
        {sections.content}
        {section.image}
    </Animatable.Text>
        </Animatable.View>
      );
    }
  
   _renderContent = (section,image) => {
      return (
        <SafeAreaView style={styles.container}>
        <View  >
        <Text style={styles.contextSubHeading}>{section.content1}</Text>
        <Text style={styles.contextText}>{section.content2}</Text>
         
         <Text style={styles.contextSubHeading}>{section.content3}</Text>
         <Text style={styles.contextText}>{section.content4}</Text>
           <View style={styles.img}>
                      {section.image}
          
           </View>
  
           </View>
  
        </SafeAreaView>
      );};
  
  
  
    _updateSections = (activeSections) => {
      this.setState({activeSections});
  
    };
  render() {
      return (
        <Accordion
          sections={SECTIONS}
          activeSections={this.state.activeSections}
          renderSectionTitle={this._renderSectionTitle}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
         />
  
      );
    }
  }
  
  const styles = StyleSheet.create({
    img: {
  alignItems:'center',
    },
    container:{
  backgroundColor:'white',
  
    },
    headerText:{
  fontSize:20,
  alignItems:'center',
  backgroundColor:'#00FFCC',
  marginBottom:5,
  borderRadius:5,
  color:'black'
  },
  contextText:{
    fontSize:20,
    fontWeight:"900",
  },
  contextSubHeading:{
    fontWeight:'bold',
    fontSize:20,
  },
  });
  
  export default AquaScreen;
  