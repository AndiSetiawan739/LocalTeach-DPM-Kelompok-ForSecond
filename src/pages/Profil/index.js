import React from 'react'
import { StyleSheet, View, Text, ImageBackground, Dimensions } from 'react-native'
import { BgProfil} from '../../assets'

const Profil = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={BgProfil} style={styles.header}>

      </ImageBackground>
    </View>
  )
}

export default Profil

const windowWidth= Dimensions.get('window').width
const windowHeight= Dimensions.get('window').height

const styles = StyleSheet.create({
  header:{
    width: windowWidth*1.150,
    height: windowHeight*0.990,
  },
  page:{
    flex: 1,
  }
})