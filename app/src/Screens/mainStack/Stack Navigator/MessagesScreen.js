import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../../Components/Header'
import Dimension from '../../../../Config/Dimension'
import COLORS from '../../../../Config/Colors'

const {width, height} = Dimension
const MessagesScreen = ({route}) => {
  const number = route.params.number
  // console.log(number);
  return (
    <View style={styles.container} >
        <Header text={'Messages'} icon={'chevron-left'} number={number} style={{ paddingTop: height/18, paddingBottom: height/40 , backgroundColor: COLORS.white }} />
        <View style={styles.messagesContainer} >
            <View style={{flexDirection: 'row', borderColor: COLORS.borderColor, borderWidth: 2}} >
              <View></View>
              <View>
                <Text></Text>
                <Text></Text>
                <Text></Text>
              </View>
            </View>
        </View>
    </View>
  )
}

export default MessagesScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    // paddingVertical: height / 20,
    // paddingHorizontal: width / 14,
    // backgroundColor: COLORS.white,
  },
  messagesContainer:{

  }
})