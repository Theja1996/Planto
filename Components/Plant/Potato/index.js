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
      title: 'සෙවෙල් අල-Alocasia',
      content1:'Scientific Name',
      content2: 'Alocasia sp ',
      content3:'Common Names',
      content4:'Sewel Ala',
      image: <Image source={require('../images/potato/sewelala.png')} />,
    },
    {
      title: 'කිඩාරන් අල-Amorphophallus paeonifolius',
      content1:'Scientific Name',
      content2: 'Amorphophallus paeonifolius',
      content3:'Common Names',
      content4:'Kidaran Ala  ',
      image: <Image  source={require('../images/potato/Kidaran.png')}  />,
       
    },
    {
      title: 'බුත්සරණ-Canna indica',
      content1:'Scientific Name',
      content2: 'Canna indica',
      content3:'Common Names',
      content4:'Buthsarana ',
      image: <Image  source={require('../images/potato/buthsarana.png')}   />,
    },
    {
      title: 'හබරල-Colocasia esculenta ',
      content1:'Scientific Name',
      content2: 'Colocasia esculenta',
          content3:'Common Names',
      content4:'Habarala,Colocasia esculenta Black,Colocasia esculenta emerald,Colocasia esculenta imperial gigante,Colocasia esculenta Mojito,Colocasia esculenta red stem',    
      image: <Image  source={require('../images/potato/habarala.png')}   />,
     },
     {
      title: 'ඉනි අල-Dioscorea alata',
      content1:'Scientific Name',
      content2: 'Dioscorea alata',
      content3:'Common Names',
      content4:'Ini Ala ',
      image: <Image  source={require('../images/potato/iniala.png')}   />,
     },
     {
      title: 'නාට්ටාල-Dioscorea alata',
      content1:'Scientific Name',
      content2: 'Dioscorea alata',
      content3:'Common Names',
      content4:'nattala Ala, Dioscorea alata ',
      image: <Image  source={require('../images/potato/nattala.png')}   />,
     },
     {
      title: 'හිරිතල-Dioscorea opposititolia ',
      content1:'Scientific Name',
      content2: 'Dioscorea opposititolia var opposititolia',
      content3:'Common Names',
      content4:'Hirithala ',
      image: <Image  source={require('../images/potato/hirithala.png')}   />,
     },
     {
        title: 'කටු අල-Dioscorea pentaphylla',
        content1:'Scientific Name',
        content2: 'Dioscorea pentaphylla ',
        content3:'Common Names',
        content4:'Katu Ala',
        image: <Image source={require('../images/potato/katuala.png')} />,
      },
      {
        title: 'බතල-Imopoea botatas',
        content1:'Scientific Name',
        content2: 'Imopoea botatas',
        content3:'Common Names',
        content4:'Bathala, Sweet Potato  ',
        image: <Image  source={require('../images/potato/bathala.png')}  />,
         
      },
      {
        title: 'කොහිල-Lasia spinosa ',
        content1:'Scientific Name',
        content2: 'Lasia spinosa ',
        content3:'Common Names',
        content4:'Kohila ',
        image: <Image  source={require('../images/potato/kohila.png')}   />,
      },
      {
        title: 'මඤ්ඤොක්කා-Manihoat esculenta ',
        content1:'Scientific Name',
        content2: 'Manihoat esculenta',
        content3:'Common Names',
        content4:'Manihoat',    
        image: <Image  source={require('../images/potato/Manihoat.png')}   />,
       },
       {
        title: 'හුලංකීරියා-Maranta arundinacea',
        content1:'Scientific Name',
        content2: 'Maranta arundinacea',
        content3:'Common Names',
        content4:'Hulankeeriya ',
        image: <Image  source={require('../images/potato/hulankeeriya.png')}   />,
       },
       {
        title: 'අර්තාපල්-Solanam tuberosum',
        content1:'Scientific Name',
        content2: 'Solanam tuberosum',
        content3:'Common Names',
        content4:'Arthapal, Ala ',
        image: <Image  source={require('../images/potato/arthapal.png')}   />,
       },
       {
        title: 'Solenastemon rotundifolius ',
        content1:'Scientific Name',
        content2: 'Solenastemon rotundifolius',
        content3:'Common Names',
        content4:'ChinesePotato ',
        image: <Image  source={require('../images/potato/ChinesePotato.png')}   />,
       },
       
  
  ];
  
  
  class PotatoScreen extends Component {
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
  
  export default PotatoScreen;
  