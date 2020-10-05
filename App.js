// In App.js in a new project

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
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Col, Row, Grid} from 'react-native-easy-grid';
import AccordionViewrAqua from './Plants/aqua';
import AccordionViewr from './Plants';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
const image = {
  uri:
    'https://i.pinimg.com/originals/1c/dc/f2/1cdcf2051c6b1caeeb29ad4c8906b74a.jpg',
};

const image5 = {
  uri: 'https://pbs.twimg.com/media/Eaf9V_sWkAIDxcq.jpg',
};
function MyPlantScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.container}>
        <SafeAreaView style={[styles.container]}>
          <ImageBackground source={image} style={styles.image}>
            <ScrollView style={styles.scrollView}>
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
              </Text>
            </ScrollView>
          </ImageBackground>
        </SafeAreaView>
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

function GalleryScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Gallery Screen</Text>
    </View>
  );
}

function SearchScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Search Screen</Text>
    </View>
  );
}

function SettingScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Setting Screen</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function DetailsScreen({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="MyPlant"
      activeColor="#e91e63"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: '#694fad'}}>
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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="MyPlant" component={MyPlantScreen} />
        <Stack.Screen name="Gallery" component={GalleryScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen
          name="Medicinal Plants"
          component={MediScreen}
          options={{
            title: 'Medicinal Plants',

            headerStyle: {
              backgroundColor: '#5bb98a',
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
              backgroundColor: '#5bb98a',
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
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    //borderWidth: 5,
    //borderColor:"#b2f9d6",
  },
  scrollView: {
    margin: 5,
    flex: 1,
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
    backgroundColor: '#00ffda',
    borderColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 5,
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
