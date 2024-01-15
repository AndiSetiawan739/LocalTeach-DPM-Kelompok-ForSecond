//Splash Index

import React, {useEffect} from 'react'
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native'
import { BgSambutan, Sambutan } from '../../assets/images'

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000)
  }, [navigation]);

  
  return (
    <ImageBackground source={BgSambutan} style={styles.background}>
      <Image source={Sambutan} style={styles.logo}/>

    </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo:{
    width: 315,
    height: 478,
  }
})