//Button navigation indx

import { TabActions } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import TabItem from '../TabItem';

const BottomNavigator = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
         <TabItem
          key={index}
          label={label}
          isFocused={isFocused}
          onPress={onPress}
          onLongPress={onLongPress}
         />
        );
      })}
    </View>
  );
  
}

export default BottomNavigator

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    backgroundColor: '#262338',
    justifyContent: 'space-between',
    paddingHorizontal: 55,
    paddingVertical: 8
  }
})