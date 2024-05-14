import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../../Config/Colors';
import Dimension from '../../Config/Dimension';


const {width, height} = Dimension
const NumberDetailsCard = ({number, numberType, subscribedPlan, countryName, expiryDate, subscriptionAmount, onPress }) => {
  return (
      <TouchableOpacity style={[ styles.mainConainer ,]} activeOpacity={0.6} onPress={onPress} >
          <View style={[styles.cardContainer]} >
            <Text style={{color: COLORS.bgColor, fontSize: 15, fontWeight: '600'}} >{number}  <Text style={{color: COLORS.grayTextColoer, fontSize: 13  }}>({numberType})</Text></Text>
            <Text style={{lineHeight: 25}} >{`${subscriptionAmount}/${subscribedPlan}`}</Text>
          </View>
          <View style={[styles.cardContainer]}>
            <Text style={{color: COLORS.black,lineHeight: 25 }} >Country Name</Text>
            <Text style={{lineHeight: 25}}>{countryName}</Text>
          </View>
          <View style={[styles.cardContainer]}>
            <Text style={{color: COLORS.black}}>Expiry Date</Text>
            <Text  style={{lineHeight: 25}} >{expiryDate}</Text>
          </View>
          </TouchableOpacity>
  

  )
}

export default NumberDetailsCard

const styles = StyleSheet.create({
    mainConainer:{
      borderColor: COLORS.borderColor,
      borderWidth: 0.5, 
      padding: 10,
      marginTop: 20,
      backgroundColor: '#ffffff',
      borderRadius: 11,
      width: width/1.1,
    },
    cardContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        
        
    }
})