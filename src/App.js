import React,{Component} from 'react'
import {View,Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import AppRoutes from './AppRoutes'
import { Provider } from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'

class App extends Component{
    render(){
     const store=createStore(reducers,{},applyMiddleware(ReduxThunk))
        return(
    <Provider store={store}>
     <NavigationContainer>
         <AppRoutes/>
     </NavigationContainer>
     </Provider>
        )
    }
}

export default App