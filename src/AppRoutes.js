import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Screen from './components/Screen';
import SplashScreen from './components/SplashScreen';

const Stack = createStackNavigator();



const AppRoutes = () => {
  return (
    <Stack.Navigator >
     <Stack.Screen name="Home" component={Screen}/>
      {/* <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      /> */}
    
  
    </Stack.Navigator>
  );
};

export default AppRoutes;
