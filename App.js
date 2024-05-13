import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import { useEffect } from 'react';
// import { useFonts } from 'expo-font';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './app/src/Screens/mainStack/Stack Navigator/StackNavigator';
const Stack = createNativeStackNavigator();
const App = () => {
  // useEffect(()=>{
  //   const [loaded] = useFonts({
  //     // Define your custom font family here
  //     CustomFont: require('./app/Config/Fonts/Manrope-Light.ttf'),
  //   });
  // }, [])

  return (
    <>
    <StatusBar barStyle={'light-content'} hidden={false}/>
      <StackNavigator/>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
