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
    ScrollView,
  } from 'react-native';
  import React, {Component} from 'react';
  import Accordion  from 'react-native-collapsible/Accordion';
  import * as Animatable from 'react-native-animatable';


  const SECTIONS =  [
    {
      title: 'අබ - Brassica juncea (L.) Czern',
      content1:'Common Names',
      content2: 'Aba ,Kaduku ,Indian Mustard ,Sarshapa  ',
      content3: 'Useful plant parts ',
      content4: 'Seed ',
      image: <Image  source={require('./images/medi/aba.png')}   />,
      image1: <Image  source={require('./images/medi/aba2.png')}   />,
    },
    {
      title: 'අක්කපාන - Bryophyllum pinnatum (Lam.) Oken',
      content1:'Common Names',
      content2: 'Akkapana ,Malakalli ,Sadhaik karaichchan ,Goethe plant, Life plant ,Asthibhaksha, Parnabeeja  ',
      content3: 'Useful plant parts ',
      content4: 'Leaf ',
      image: <Image  source={require('./images/medi/akkapana.png')}   />,
      image1: <Image  source={require('./images/medi/akkapana2.png')}   />,
    },
    {
      title: 'අලු-පුහුල් - Benincasa hispida (Thunb.) Cogn.',
      content1:'Common Names',
      content2: 'Alu-puhul ,Kalyanappushinikkay, Puchini, Sambal poosani , Ash pumpkin, Wax gourd , Karkaru, Kushmanda, Suphala, Timasha  ',
      content3: 'Useful plant parts ',
      content4: 'Fruit ',
      image: <Image  source={require('./images/medi/alupuhul.png')}   />,
      image1: <Image  source={require('./images/medi/alupuhul2.png')}   />,
    },
    {
      title: 'අන්නාසි - Ananas comosus (L.) Merr',
      content1:'Common Names',
      content2: 'Annasi ,Anassappalam, Annasa ,Pineapple ,Ama, Kautukasanjaka, Paravati ',
      content3: 'Useful plant parts ',
      content4: 'Leaf and young fruit ',
      image: <Image  source={require('./images/medi/annasi.png')}   />,
      image1: <Image  source={require('./images/medi/annasi2.png')}   />,
     },
     {
      title: 'අස්වැන්න -Alysicarpus vaginalis (L.) DC.',
      content1:'Common Names',
      content2: 'Aswenna ,rumpulladi, Pullardi ,One-leaf clover ,Bhumi-sala-parni',
      content3: 'Useful plant parts ',
      content4: 'Whole plant ',
      image: <Image  source={require('./images/medi/aswenna.png')}   />,
      image1: <Image  source={require('./images/medi/aswenna2.png')}   />,
     },
     {
      title: 'බරව-ඇඹිල්ල - Ananas comosus (L.) Merr',
      content1:'Common Names',
      content2: 'Barawa-embilla, Kebella ,Kodali, Vettikan, Vettil ',
      content3: 'Useful plant parts ',
      content4: 'Root ',
      image: <Image  source={require('./images/medi/barawaembilla.png')}   />,
      image1: <Image  source={require('./images/medi/barawaembilla2.png')}   />,
     },
     {
      title: 'බැදි-දෙල් - Artocarpus nobilis Thwaites(Moraceae)',
      content1:'Common Names',
      content2: 'Bedidel ,Arsini-pla, Irappala ,Sri Lankan Breadfruit  ',
      content3: 'Useful plant parts ',
      content4: 'Seed and young shoot ',
      image: <Image  source={require('./images/medi/bedidel.png')}   />,
      image1: <Image  source={require('./images/medi/bedidel2.png')}   />,
    },
    {
      title: '‌බෙහෙත්-අනෝ්ද- Abutilon indicum (L.) Sweet(Malvaceae)',
      content1:'Common Names',
      content2: 'Beheth anoda ,Paniyarthuththi, Peruntulli ,Country Mallow ,Atibala  ',
      content3: 'Useful plant parts ',
      content4: 'Leaf and root',
      image: <Image  source={require('./images/medi/behethanoda.png')}   />,
      image1: <Image  source={require('./images/medi/behethanoda2.png')}   />,
    },
    {
      title: 'බෙලි -Aegle marmelos (L.) Corrêa(Rutaceae)',
      content1:'Common Names',
      content2: 'Beli ,Aluvigam, Vilram ,Bael fruit tree ,Bilva   ',
      content3: 'Useful plant parts ',
      content4: 'Fruit, leaf and flower ',
      image: <Image  source={require('./images/medi/beli.png')}   />,
      image1: <Image  source={require('./images/medi/beli2.png')}   />,
    },
    {
      title: 'බිලිං -Averrhoa bilimbi L.(Oxalidaceae)',
      content1:'Common Names',
      content2: 'Bilin ,Kochitta-marattai, Vilangai ,Bilimbi  ',
      content3: 'Useful plant parts ',
      content4: 'Leaf and fruit ',
      image: <Image  source={require('./images/medi/bilin.png')}   />,
      image1: <Image  source={require('./images/medi/bilin2.png')}   />,
    },

  ];
  // function MediScreen({ navigation: { navigate } }) {

  //   return (
  //     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
  //       <View style={styles.container}>
  //         <SafeAreaView style={[styles.container]}>
  //           <ScrollView style={styles.scrollView}>
  //             <Medi />
  //           </ScrollView>
  //         </SafeAreaView>
  //       </View>
  //     </View>
  //   );
  // }

  class MediScreen extends Component {
   state = {
      activeSections: [],
    };

    _renderHeader(section, index, isActive, sections) {
      return (
        <ScrollView>
        <Animatable.View
          duration={300}
          transition="backgroundColor"
          style={{ backgroundColor: (isActive ? 'rgba(255,255,255,1)' : 'rgba(245,252,255,1)') }}>
          <Text style={styles.headerText}>{section.title}</Text>
             </Animatable.View>
            </ScrollView>
      );
    }


   _renderContent(section, i, isActive, sections,props) {
      return (
        <ScrollView>
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
        </ScrollView>
      );
    }

   _renderContent = (section,image) => {
      return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
        <View  >
        <Text style={styles.contextSubHeading}>{section.content1}</Text>
          <Text style={styles.contextText}>{section.content2}</Text>

           <Text style={styles.contextSubHeading}>{section.content3}</Text>
           <Text style={styles.contextText}>{section.content4}</Text>
           <View style={styles.img}>
                      {section.image}
           {section.image1}
           </View>

           </View>

        </SafeAreaView>
        </ScrollView>
      );};



    _updateSections = (activeSections) => {
      this.setState({activeSections});

    };
  render() {
      return (
        <ScrollView>
        <Accordion
          sections={SECTIONS}
          activeSections={this.state.activeSections}
          renderSectionTitle={this._renderSectionTitle}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
         />
 </ScrollView>
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
  color:'black',
  },
  contextText:{
    fontSize:20,
    fontWeight:'900',
  },
  contextSubHeading:{
    fontWeight:'bold',
    fontSize:20,
  },
  });

  export default MediScreen;
