import { StyleSheet } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { IconButton, Icon } from 'react-native-paper';
import COLORS from '../../../../Config/Colors';
import Home from './Home';
import SearchNumber from './SearchNumber';
const Tab = createBottomTabNavigator()

const BottomTabsNavigator = () => {
  return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.bgColor
          },
          headerTintColor: '#ffff',
          headerRight: ()=>(
            <IconButton background={COLORS.textColor} icon={'bell-circle'} iconColor={COLORS.textColor} size={35} onPress={()=> console.log('Notification Icon Pressed')} />
          ),
          // headerTransparent: true,
}} >
            <Tab.Screen name='Home' component={Home} options={{
              title: 'Home',
              tabBarIcon : ()=>{
                return <Icon source={'home-outline'} size={25} color={COLORS.bgColor} />
              }
            }} />
            <Tab.Screen name='Search' component={SearchNumber} options={{
              tabBarIcon : ()=>{
                return <Icon source={'magnify'} size={25} color={COLORS.bgColor} />
              }
                
            }} />
           
        </Tab.Navigator>
  )
}

export default BottomTabsNavigator

const styles = StyleSheet.create({})