import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home, Notifikasi, Profil, Splash} from '../pages'
import BottomNavigator from '../components/BottomNavigtor';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
        <Tab.Screen name="Home" component={Home}  options={{headerShown: false }} />
        <Tab.Screen name="Notifikasi" component={Notifikasi} options={{headerShown: false }} />
        <Tab.Screen name="Profil" component={Profil}options={{headerShown: false }}   />
      </Tab.Navigator>
  )
}


const Router = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false }} />
        <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false }} />
      </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})