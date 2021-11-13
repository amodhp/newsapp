import React,{Component} from 'react'
import {View,Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import AppRoutes from './AppRoutes'

class App extends Component{
    render(){
        return(
     <NavigationContainer>
         <AppRoutes/>
     </NavigationContainer>
        )
    }
}

export default App