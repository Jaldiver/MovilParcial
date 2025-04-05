import React from 'react'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import HomeScreen from '../screens/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AppNavigator = () => {
  return (
    <stack.Navigator initialRouteName="Login">
    <stack.Screen name = "Login" component={LoginScreen} options={{headerShown: false}}/>
    <stack.Screen name = "Register" component={RegisterScreen} options={{headerShown: false}}/>
    <stack.Screen name = "HomeScreen" component={HomeScreen} options = {{headerShown: false}}/>
</stack.Navigator>
  )
}

export default AppNavigator