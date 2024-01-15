import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Homeon, Homep, Notifon, Notifp, Profilon, Profilp } from '../../assets'
import {WarnaUtama, WarnaDisable} from '../../utils/constant'

const TabItem = ({isFocused, onLongPress, onPress, label}) => {
    const Icon = () => {
        if(label === "Home") return isFocused ? <Homeon/> : <Homep/>

        if(label === "Notifikasi") return isFocused ? <Notifon/> : <Notifp/>

        if(label === "Profil") return isFocused ? <Profilon/> : <Profilp/>

        return <Homep/>
    }
  return (
    <TouchableOpacity
           
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
          >
            <Icon/>
            <Text style={styles.text(isFocused)}>
              {label}
            </Text>
          </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({
    container:{
        alignItems: 'center', 
    },
    text: (isFocused) => ({
        fontSize: 13,
        color: isFocused? '#0080A8' : WarnaDisable,
        marginTop: 5,
    })
})