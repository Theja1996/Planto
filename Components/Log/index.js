/* eslint-disable prettier/prettier */
//import {createAppContainer, createStackNavigator} from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// import Splash from './Components/Splash';
// import Log from './Components/Log';
import HomeScreen from '../Home';
import MediScreen from '../Plant';
import AquaScreen from '../Plant/Aqua';
import PotatoScreen from '../Plant/Potato';
import BushesScreen from '../Plant/Bushes';
import FruitScreen from '../Plant/Fruit';

const Log = createStackNavigator({
  Home: {screen: HomeScreen, navigationOptions: {header: null}},
  Plant: {
    screen: MediScreen,
    navigationOptions: {headerTitle: 'Medical Plants'},
  },
  Aqua: {
    screen: AquaScreen,
    navigationOptions: {headerTitle: 'Aquatic Plants'},
  },
  Potato: {
    screen: PotatoScreen,
    navigationOptions: {headerTitle: 'Potato Plants'},
  },
  Bushes: {screen: BushesScreen, navigationOptions: {headerTitle: 'Bushes'}},
  Fruit: {
    screen: FruitScreen,
    navigationOptions: {headerTitle: 'Fruit Plants'},
  },
});

export default createAppContainer(Log);

/* eslint-disable prettier/prettier */
// import React, {Component} from 'react';
// import {View, Text} from 'react-native';

//  import {NavigationContainer} from '@react-navigation/native';
//  import {createStackNavigator} from '@react-navigation/stack';

//   //import HomeScreen from '../Home';

//  //  import { enableScreens } from 'react-native-screens';
//  // import { createNativeStackNavigator } from 'react-native-screens/native-stack';

//  // enableScreens();
//  // const Stack = createNativeStackNavigator();

//  const Stack = createStackNavigator();
// function HomeScreen({ navigation: { navigate } }) {
//   return (
//     <View>
//       <Text>This is the home screen of the app</Text>

//     </View>
//   );
// }

// export default class Log extends Component {

//   render() {

//     return (
//       <NavigationContainer>
//       <Stack.Navigator>
//          <Stack.Screen
//            name="Home"
//            component={HomeScreen}

//             options={{
//              title: 'Home',

//              headerStyle: {
//                backgroundColor: '#24aa74',
//             },
//              headerTintColor: 'black',
//            }}
//         />

//         <HomeScreen  />
//          </Stack.Navigator>
//      </NavigationContainer>

//     );
//   }
// }

// /* eslint-disable prettier/prettier */
// import * as React from 'react';
// import {
//   View,
//   Text,
//   Button,
//   ImageBackground,
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
//   ScrollView,
//   Animated,
// } from 'react-native';

// import {Container, Header, Icon} from 'native-base';

// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// import {Col, Row, Grid} from 'react-native-easy-grid';
// import AccordionViewrAqua from './Plant/aqua';
// import AccordionViewrPotato from './Plant/potato';
// import Medi from './Plant';

// //import Gallery from './Gallery';
// //import MyComponent from './Search';

// //import Menu from './Menu';
// //import Splash from './splash';

// function HomeScreen({navigation}) {
//   return (
//     <Container>
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => navigation.navigate('Details')}
//         />

//       </View>
//     </Container>
//   );
// }
// /*const image = {
//   uri:
//     'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
// };*/

// function MyPlantScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <View style={styles.container}>

//         <Animated.ScrollView style={styles.scrollView}>
//           <SafeAreaView style={[styles.container1]}>
//             <Text style={styles.textM}>
//               <Row>
//                 <Col style={styles.buttonMN}>
//                   <TouchableOpacity
//                     onPress={() => navigation.navigate('Medicinal Plants')}>
//                     <View style={styles.buttonM}>
//                       <Text style={styles.buttonText}>Medicinal Plants</Text>
//                     </View>
//                   </TouchableOpacity>
//                 </Col>
//                 <Col>
//                   <TouchableOpacity
//                     onPress={() => navigation.navigate('Aquatic Plants')}>
//                     <View style={styles.buttonM}>
//                       <Text style={styles.buttonText}>Aquatic Plants</Text>
//                     </View>
//                   </TouchableOpacity>
//                 </Col>
//               </Row>

//               <Row>
//                 <Col style={styles.buttonMN}>
//                   <TouchableOpacity
//                     onPress={() => navigation.navigate('Potato Plants')}>
//                     <View style={styles.buttonM}>
//                       <Text style={styles.buttonText}>Potato Plants</Text>
//                     </View>
//                   </TouchableOpacity>
//                 </Col>
//                 <Col>
//                   <TouchableOpacity
//                     onPress={() => navigation.navigate('Aquatic Plants')}>
//                     <View style={styles.buttonM}>
//                       <Text style={styles.buttonText}>Aquatic Plants</Text>
//                     </View>
//                   </TouchableOpacity>
//                 </Col>
//               </Row>

//               <Row>
//                 <Col style={styles.buttonMN}>
//                   <TouchableOpacity
//                     onPress={() => navigation.navigate('Medicinal Plants')}>
//                     <View style={styles.buttonM}>
//                       <Text style={styles.buttonText}>Medicinal Plants</Text>
//                     </View>
//                   </TouchableOpacity>
//                 </Col>
//                 <Col>
//                   <TouchableOpacity
//                     onPress={() => navigation.navigate('Aquatic Plants')}>
//                     <View style={styles.buttonM}>
//                       <Text style={styles.buttonText}>Aquatic Plants</Text>
//                     </View>
//                   </TouchableOpacity>
//                 </Col>
//               </Row>
//             </Text>
//           </SafeAreaView>
//         </Animated.ScrollView>
//       </View>
//     </View>
//   );
// }

// function MediScreen({navigation}) {
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
// function AquaScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <View style={styles.container}>
//         <SafeAreaView style={[styles.container]}>
//           <ScrollView style={styles.scrollView}>
//             <AccordionViewrAqua />
//           </ScrollView>
//         </SafeAreaView>
//       </View>
//     </View>
//   );
// }

// function PotatoScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <View style={styles.container}>
//         <SafeAreaView style={[styles.container]}>
//           <ScrollView style={styles.scrollView}>
//             <AccordionViewrPotato />
//           </ScrollView>
//         </SafeAreaView>
//       </View>
//     </View>
//   );
// }

// const Stack = createStackNavigator();

// function Log() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}

//            options={{
//             title: 'Home',

//             headerStyle: {
//               backgroundColor: '#24aa74',
//             },
//             headerTintColor: 'black',
//           }}
//         />

//         <Stack.Screen
//           name="MyPlant"
//           component={MyPlantScreen}
//           options={{
//             title: 'MyPlant',

//             headerStyle: {
//               backgroundColor: '#24aa74',
//             },
//             headerTintColor: 'black',
//           }}
//         />

//         <Stack.Screen
//           name="Medicinal Plants"
//           component={MediScreen}
//           options={{
//             title: 'Medicinal Plants',

//             headerStyle: {
//               backgroundColor: '#24aa74',
//             },
//             headerTintColor: '#fff',
//           }}
//         />
//         <Stack.Screen
//           name="Aquatic Plants"
//           component={AquaScreen}
//           options={{
//             title: 'Aquatic Plants',

//             headerStyle: {
//               backgroundColor: '#24aa74',
//             },
//             headerTintColor: '#fff',
//           }}
//         />
//         <Stack.Screen
//           name="Potato Plants"
//           component={PotatoScreen}
//           options={{
//             title: 'Potato Plants',

//             headerStyle: {
//               backgroundColor: '#24aa74',
//             },
//             headerTintColor: '#fff',
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     //flexDirection: 'column',
//     width: '100%',
//     height: '100%',
//     // backgroundColor:'#45cc99',
//   },
//   container1: {
//     //  flex: 1,
//     //flexDirection: 'column',
//     //width: '100%',
//     //height: '100%',
//     //#5cd3a1marginTop: 10,
//   },
//   image: {
//     //flex: 1,
//     //resizeMode: 'cover',
//     //justifyContent: 'center',
//     //borderWidth: 5,
//     //borderColor:"#b2f9d6",
//     // width: 300,
//     height: 200,
//     borderTopLeftRadius: 60,
//   },
//   scrollView: {
//     //margin: 5,
//     //flex: 1,
//     flexDirection: 'column',
//   },

//   textM: {
//     fontSize: 56,
//     alignItems: 'center',
//     paddingHorizontal: 50,
//     padding: 5,
//   },
//   buttonM: {
//     // marginBottom: 30,
//     width: 150,
//     height: 150,
//     // flex:3,
//     justifyContent: 'space-around',
//     alignItems: 'flex-start',
//     // backgroundColor: '#00ffda',
//     borderColor: '#FFFFFF',
//     borderRadius: 10,
//     borderWidth: 2,
//     marginRight: 20,
//     //  margin:5,
//     //marginLeft:5,
//   },
//   buttonMN: {
//     marginLeft: -25,
//     marginRight: 25,
//   },

//   buttonText: {
//     textAlign: 'center',
//     padding: 20,
//     color: 'white',
//     fontSize: 20,
//   },
// });

// export default Log;
