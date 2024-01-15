import React from 'react'
import { StyleSheet, View, Text, ImageBackground, Dimensions } from 'react-native'
import { BgNotif } from '../../assets'

const Notifikasi = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={BgNotif} style={styles.header}>

      </ImageBackground>
    </View>
  )
}

export default Notifikasi

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