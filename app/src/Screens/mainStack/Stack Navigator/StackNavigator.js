import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabsNavigator from '../Bottom Tabs Navigator/BottomTabsNavigator'
import AreaNumbers from './AreaNumbers'
import NumberDetails from './NumberDetails'
import MessagesScreen from './MessagesScreen'

const Stack = createNativeStackNavigator()
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='bottomTab'screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='bottomTab' component={BottomTabsNavigator} />
        <Stack.Screen name='areaNumbers' component={AreaNumbers} />
        <Stack.Screen name='numberDetails' component={NumberDetails} />
        <Stack.Screen name='messagesScreen' component={MessagesScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})