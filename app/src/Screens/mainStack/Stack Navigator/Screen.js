import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Platform } from 'react-native';
import { StatusBar } from 'react-native';


const Screen = ({children}) => {
  return (
    <SafeAreaView style={styles.container} >
      {children}
    </SafeAreaView>
  )
}

export default Screen

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: Platform.OS === 'android'? '' : ''
    }
})