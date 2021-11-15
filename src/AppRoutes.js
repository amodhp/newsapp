import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Screen from './components/Screen';
import Login from './components/Login';
import SplashScreen from './components/SplashScreen';
import CategoryDetail from './components/common/CategoryDetail';
import ArticleDetail from './components/common/ArticleDetail';


const Stack = createStackNavigator();



const AppRoutes = () => {
  return (
    <Stack.Navigator initialRoute="SplashScreen">
     
     <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      /> 
       <Stack.Screen name="Login" component={Login}  options={{
          headerShown: false,
        }}/> 
      <Stack.Screen name="Home" component={Screen} options={{headerLeft:null}}/>

      <Stack.Screen name="Category" component={CategoryDetail}  />

      <Stack.Screen name="Article" component={ArticleDetail}/>

     
    
  
    </Stack.Navigator>
  );
};

export default AppRoutes;
