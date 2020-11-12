/* eslint-disable prettier/prettier */
import * as React from 'react';
import {
  View,
  Text,
  Button,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';

import {Container, Header, Icon} from 'native-base';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Col, Row, Grid} from 'react-native-easy-grid';
import AccordionViewrAqua from './Plants/aqua';
import AccordionViewrPotato from './Plants/potato';
import AccordionViewr from './Plants';

import Gallery from './Gallery';
import MyComponent from './Search';

import Menu from './Menu';
import Splash from './splash';

function HomeScreen({navigation}) {
  return (
    <Container>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
        <Splash />
      </View>
    </Container>
  );
}
/*const image = {
  uri:
    'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
};*/

function MyPlantScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.container}>
        <ImageBackground
          source={require('./Plants/images/prof/canvan.png')}
          style={styles.image}>
          <MyComponent />
        </ImageBackground>
        <Animated.ScrollView style={styles.scrollView}>
          <SafeAreaView style={[styles.container1]}>
            <Text style={styles.textM}>
              <Row>
                <Col style={styles.buttonMN}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Medicinal Plants')}>
                    <View style={styles.buttonM}>
                      <Text style={styles.buttonText}>Medicinal Plants</Text>
                    </View>
                  </TouchableOpacity>
                </Col>
                <Col>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Aquatic Plants')}>
                    <View style={styles.buttonM}>
                      <Text style={styles.buttonText}>Aquatic Plants</Text>
                    </View>
                  </TouchableOpacity>
                </Col>
              </Row>

              <Row>
                <Col style={styles.buttonMN}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Potato Plants')}>
                    <View style={styles.buttonM}>
                      <Text style={styles.buttonText}>Potato Plants</Text>
                    </View>
                  </TouchableOpacity>
                </Col>
                <Col>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Aquatic Plants')}>
                    <View style={styles.buttonM}>
                      <Text style={styles.buttonText}>Aquatic Plants</Text>
                    </View>
                  </TouchableOpacity>
                </Col>
              </Row>

              <Row>
                <Col style={styles.buttonMN}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Medicinal Plants')}>
                    <View style={styles.buttonM}>
                      <Text style={styles.buttonText}>Medicinal Plants</Text>
                    </View>
                  </TouchableOpacity>
                </Col>
                <Col>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Aquatic Plants')}>
                    <View style={styles.buttonM}>
                      <Text style={styles.buttonText}>Aquatic Plants</Text>
                    </View>
                  </TouchableOpacity>
                </Col>
              </Row>
            </Text>
          </SafeAreaView>
        </Animated.ScrollView>
      </View>
    </View>
  );
}

function MediScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.container}>
        <SafeAreaView style={[styles.container]}>
          <ScrollView style={styles.scrollView}>
            <AccordionViewr />
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
}
function AquaScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.container}>
        <SafeAreaView style={[styles.container]}>
          <ScrollView style={styles.scrollView}>
            <AccordionViewrAqua />
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
}

function PotatoScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.container}>
        <SafeAreaView style={[styles.container]}>
          <ScrollView style={styles.scrollView}>
            <AccordionViewrPotato />
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
}

function GalleryScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.container}>
        <SafeAreaView style={[styles.container]}>
          <ScrollView style={styles.scrollView}>
            <Gallery />
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
}

function SearchScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.container}>
        <SafeAreaView style={[styles.container]}>
          <ScrollView style={styles.scrollView} />
        </SafeAreaView>
      </View>
    </View>
  );
}

function SettingScreen({navigation}) {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Menu />
    </SafeAreaView>
  );
}

const Tab = createMaterialBottomTabNavigator();

function DetailsScreen({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="MyPlant"
      activeColor="#24aa74"
      inactiveColor="white"
      barStyle={{backgroundColor: 'black'}}>
      <Tab.Screen
        name="MyPlant"
        component={MyPlantScreen}
        options={{
          tabBarLabel: 'My Plant',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          tabBarLabel: 'Gallery',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}

          /*  options={{
            title: 'Home',

            headerStyle: {
              backgroundColor: '#24aa74',
            },
            headerTintColor: 'black',
          }}*/
        />

        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            //   title: 'Details',

            headerStyle: {
              backgroundColor: '#24aa74',
            },
            headerTintColor: 'black',
          }}
        />
        <Stack.Screen
          name="MyPlant"
          component={MyPlantScreen}
          options={{
            title: 'MyPlant',

            headerStyle: {
              backgroundColor: '#24aa74',
            },
            headerTintColor: 'black',
          }}
        />
        <Stack.Screen
          name="Gallery"
          component={GalleryScreen}
          options={{
            headerStyle: {
              backgroundColor: '#24aa74',
            },
            headerTintColor: 'black',
          }}
        />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen
          name="Medicinal Plants"
          component={MediScreen}
          options={{
            title: 'Medicinal Plants',

            headerStyle: {
              backgroundColor: '#24aa74',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Aquatic Plants"
          component={AquaScreen}
          options={{
            title: 'Aquatic Plants',

            headerStyle: {
              backgroundColor: '#24aa74',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Potato Plants"
          component={PotatoScreen}
          options={{
            title: 'Potato Plants',

            headerStyle: {
              backgroundColor: '#24aa74',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'column',
    width: '100%',
    height: '100%',
    // backgroundColor:'#45cc99',
  },
  container1: {
    //  flex: 1,
    //flexDirection: 'column',
    //width: '100%',
    //height: '100%',
    //#5cd3a1marginTop: 10,
  },
  image: {
    //flex: 1,
    //resizeMode: 'cover',
    //justifyContent: 'center',
    //borderWidth: 5,
    //borderColor:"#b2f9d6",
    // width: 300,
    height: 200,
    borderTopLeftRadius: 60,
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
    borderColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 2,
    marginRight: 20,
    //  margin:5,
    //marginLeft:5,
  },
  buttonMN: {
    marginLeft: -25,
    marginRight: 25,
  },

  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
    fontSize: 20,
  },
});

export default App;
