import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { useState } from 'react';
import React from 'react'
import COLORS from '../../Config/Colors';

const CountriesCard = ({name, code, style, number,Text1, Text2, text1Style, text2Style}) => {
    let [isFocus , setisFocus] = useState(false)

    let handleFocus = () => {
      setisFocus((prev) => !prev)
    };
  
  return (
    <Pressable 
          onPress={handleFocus}
          style={({pressed}) =>[
            styles.cardContainer,
            pressed || isFocus ? {borderColor: COLORS.bgColor, borderWidth: 2, borderStyle: 'solid'} : null, style, ]} >
            {/* <Image source={{uri: 'https://www.countries-ofthe-world.com/flags-normal/flag-of-Afghanistan.png'}} style={{width:5, height: 5, resizeMode: 'contain' }} /> */}
            <Text style={text1Style} >{`(+${code}) ${name}`}</Text>
            <Text style={text2Style} > {number} </Text>
          </Pressable>
  )
}

export default CountriesCard

const styles = StyleSheet.create({
    cardContainer :{
        borderStyle: 'solid',
        borderRadius: 10,
        borderWidth: 1, 
        borderColor:COLORS.borderColor,
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        width:'100%',
        padding:13,
      }
})