/*import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import Home from './components/index'
import Mapa from './components/Mapa'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();

function Navigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Index'
            component={Home}/>
            <Stack.Screen name='Mapa'
            component={Mapa}/>
        </Stack.Navigator>
    )
}

export default function App(){
  return(<NavigationContainer>
    <Navigator/>
  </NavigationContainer>)
}*/
// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigator from './components/navigator'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Navigator/>
    </NavigationContainer>
  );
}



export default App;