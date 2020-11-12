/* eslint-disable prettier/prettier */
//import {createAppContainer, createStackNavigator} from 'react-navigation';
import { createAppContainer } from 'react-navigation';
 import { createStackNavigator } from 'react-navigation-stack';

import Splash from './Components/Splash';
import Log from './Components/Log';


const App = createStackNavigator({
  Splash: {screen: Splash,navigationOptions:{header:null}},
  Log: {screen: Log,navigationOptions:{header:null}},
  
});

export default createAppContainer(App);
