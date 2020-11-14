/* eslint-disable prettier/prettier */
import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    Animated,
    ScrollView,
    ImageBackground,
    
    

} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAtom } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Grid } from 'react-native-easy-grid';



function HomeScreen({ navigation: { navigate } }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.container}>
           <ImageBackground
          source={require('../Plant/images/pic.jpg')}
          style={styles.image}>
          
      
                <Animated.ScrollView style={styles.scrollView}>
                    <SafeAreaView >
                    
                        <Text style={styles.textM}>
                       
                            <Row style={styles.row}>
                                <Col style={styles.buttonMN}>
                                    <TouchableOpacity onPress={() => navigate('Plant')}
                                    >
                                        <View style={styles.buttonM}>
                                            <Text style={styles.buttonText}>Medicinal Plants</Text>
                                        </View>
                                    </TouchableOpacity>
                                </Col>
                                <Col>
                                    <TouchableOpacity onPress={() => navigate('Aqua')}
                                    >
                                        <View style={styles.buttonM}>
                                            <Text style={styles.buttonText}>Aquatic Plants</Text>
                                        </View>
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                           
                            <Row style={styles.row}>
                <Col style={styles.buttonMN}>
                  <TouchableOpacity
                    onPress={() => navigate('Potato')}>
                    <View style={styles.buttonM}>
                      <Text style={styles.buttonText}>Potato Plants</Text>
                    </View>
                  </TouchableOpacity>
                </Col>
                <Col>
                  <TouchableOpacity
                    onPress={() => navigate('Bushes')}>
                    <View style={styles.buttonM}>
                      <Text style={styles.buttonTextbushes}>Bushes</Text>
                    </View>
                  </TouchableOpacity>
                </Col>
              </Row>
             
              <Row style={styles.row}>
                                <Col style={styles.buttonMN}>
                                    <TouchableOpacity onPress={() => navigate('Fruit')}
                                    >
                                        <View style={styles.buttonM}>
                                            <Text style={styles.buttonText}>Fruit Plants</Text>
                                        </View>
                                    </TouchableOpacity>
                                </Col>
                                <Col>
                                    <TouchableOpacity onPress={() => navigate('Aqua')}
                                    >
                                        <View style={styles.buttonM}>
                                            <Text style={styles.buttonText}>Aquatic Plants</Text>
                                        </View>
                                    </TouchableOpacity>
                                </Col>
                            </Row>

                            <Row style={styles.row}>
                                <Col style={styles.buttonMN}>
                                    <TouchableOpacity onPress={() => navigate('Plant')}
                                    >
                                        <View style={styles.buttonM}>
                                            <Text style={styles.buttonText}>Medicinal Plants</Text>
                                        </View>
                                    </TouchableOpacity>
                                </Col>
                                <Col>
                                    <TouchableOpacity onPress={() => navigate('Aqua')}
                                    >
                                        <View style={styles.buttonM}>
                                            <Text style={styles.buttonText}>Aquatic Plants</Text>
                                        </View>
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                            
                        </Text>
                      
                    </SafeAreaView>
                </Animated.ScrollView>
                 </ImageBackground>
               
            </View>
            <View style={{ flexDirection: 'row', justifyContent:'space-evenly' }}>
<FontAwesomeIcon icon={ faAtom} size={50}  secondaryColor="#ffff" onPress={() => navigate('Aqua')} />

</View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'column',
        width: '100%',
        height: '80%',
      //  backgroundColor:'#cce7e8',
        // borderColor:'black',
        // borderBottomWidth:40,
        // borderBottomLeftRadius:20,
        // borderBottomRightRadius:20,
        // borderTopWidth:20,
       
    },
    scrollView: {
        //margin: 5,
        //flex: 1,
        flexDirection: 'column',
    },
    textM: {
        fontSize: 56,
        alignItems: 'center',
        paddingHorizontal: 50,
        padding: 5,
    },
    
    buttonM: {
        // marginBottom: 30,
        width: 150,
        height: 150,
        // flex:3,
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        // backgroundColor: '#00ffda',
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 2,
        marginRight: 20,
        //  margin:5,
        //marginLeft:5,
    shadowColor:'red',
    shadowOpacity:0.6,
  //  backgroundColor:'red',
  
    
    },
    buttonMN: {
        marginLeft: -25,
        marginRight: 25,
    },

    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'black',
        fontSize: 20,
    },
    textM: {
        fontSize: 56,
        alignItems: 'center',
        paddingHorizontal: 50,
        padding: 5,
    },
    row:
    {
        padding:5,
        margin:5,
    },
    image: {
        height: '100%',
        width:'100%',
borderBottomWidth:10,
borderBottomLeftRadius:2,
borderBottomRightRadius:2,
borderTopWidth:20,
//borderTopEndRadius:30,
//borderTopStartRadius:30,

      },
      buttonTextbushes:{
        textAlign: 'center',
        padding: 40,
        color: 'black',
        fontSize: 20,
      },
     

});

export default HomeScreen;
