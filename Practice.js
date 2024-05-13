// let Numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// let multiplyArray = Numbers.map((item,index)=>{
//     return item + 1
// })

// Numbers.forEach(item => {
//   return (item + 1)
// });

// // console.log(multiplyArray);
// console.log (Numbers)

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Practice = ({children}) => {
  return (
    <View>
      {children}
    </View>
  )
}

export default Practice

const styles = StyleSheet.create({})