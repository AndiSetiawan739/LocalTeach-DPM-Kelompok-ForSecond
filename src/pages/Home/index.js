import React from 'react'
import { StyleSheet, View, Text, ImageBackground, Dimensions } from 'react-native'
import { HeaderBeranda } from '../../assets'

const Home = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={HeaderBeranda} style={styles.header}>

      </ImageBackground>
    </View>
  )
}

export default Home

const windowWidth= Dimensions.get('window').width
const windowHeight= Dimensions.get('window').height

const styles = StyleSheet.create({
  header:{
    width: windowWidth,
    height: windowHeight*1.100,
  },
  page:{
    flex: 1,
  }
})