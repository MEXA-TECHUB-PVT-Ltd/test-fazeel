import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Dimension from '../../../../Config/Dimension'
import { IconButton, TextInput } from 'react-native-paper'
import COLORS from '../../../../Config/Colors'
import CountriesCard from '../../../Components/CountriesCard'
var {width, height} = Dimension

const AreaNumbers = ({navigation}) => {
    let [areaData, setAreaData] = useState([
            { name: 'Alabama', areaCode: '205', numbers: '80 numbers'},
            { name: 'Alaska', areaCode: '907' ,numbers: '32 numbers'},
            { name: 'Arizona', areaCode: '602' , numbers: '14 numbers'},
            { name: 'Arkansas', areaCode: '501', numbers: '12 numbers'},
            { name: 'California', areaCode: '213', numbers: '20 numbers'},
            { name: 'Colorado', areaCode: '303', numbers: '43 numbers'},
            { name: 'Connecticut', areaCode: '860', numbers: '54 numbers'},
            { name: 'Delaware', areaCode: '302' , numbers: '24 numbers'},
            { name: 'Florida', areaCode: '305' , numbers: '86 numbers'},
            { name: 'Georgia', areaCode: '404' , numbers: '67 numbers'},
            { name: 'Hawaii', areaCode: '808', numbers: '37 numbers'},
            { name: 'Idaho', areaCode: '208' , numbers: '76 numbers'},
            { name: 'Illinois', areaCode: '312' , numbers: '40 numbers'},
            { name: 'Indiana', areaCode: '317' , numbers: '21 numbers'},
            { name: 'Iowa', areaCode: '515' , numbers: '15 numbers'},
            { name: 'Kansas', areaCode: '785', numbers: '76 numbers'},
            { name: 'Kentucky', areaCode: '502', numbers: '85 numbers'},
            { name: 'Louisiana', areaCode: '504' , numbers: '79 numbers'},
            { name: 'Maine', areaCode: '207', numbers: '03 numbers'},
            { name: 'Maryland', areaCode: '410' , numbers: '09 numbers'},
            { name: 'Massachusetts', areaCode: '617', numbers: '98 numbers'},
            { name: 'Michigan', areaCode: '313', numbers: '26 numbers'},
            { name: 'Minnesota', areaCode: '612', numbers: '59 numbers'},
            { name: 'Mississippi', areaCode: '601', numbers: '10 numbers'},
            { name: 'Missouri', areaCode: '314' , numbers: '63 numbers'},
            { name: 'Montana', areaCode: '406' , numbers: '30 numbers'},
            { name: 'Nebraska', areaCode: '402', numbers: '99 numbers'},
            { name: 'Nevada', areaCode: '702' , numbers: '88 numbers'},
            { name: 'New Hampshire', areaCode: '603', numbers: '33 numbers'},
            { name: 'New Jersey', areaCode: '201' , numbers: '22 numbers'},
            { name: 'New Mexico', areaCode: '505' , numbers: '57 numbers'},
            { name: 'New York', areaCode: '212' , numbers: '36 numbers'},
            { name: 'North Carolina', areaCode: '704', numbers: '44 numbers'},
            { name: 'North Dakota', areaCode: '701' , numbers: '05 numbers'},
            { name: 'Ohio', areaCode: '216', numbers: '71 numbers'},
            { name: 'Oklahoma', areaCode: '405' , numbers: '54 numbers'},
            { name: 'Oregon', areaCode: '503' , numbers: '94 numbers'},
            { name: 'Pennsylvania', areaCode: '215', numbers: '85 numbers'},
            { name: 'Rhode Island', areaCode: '401', numbers: '93 numbers'},
            { name: 'South Carolina', areaCode: '803' , numbers: '82 numbers'},
            { name: 'South Dakota', areaCode: '605' , numbers: '46 numbers'},
            { name: 'Tennessee', areaCode: '615', numbers: '78 numbers'},
            { name: 'Texas', areaCode: '214' , numbers: '28 numbers'},
            { name: 'Utah', areaCode: '801' , numbers: '18 numbers'},
            { name: 'Vermont', areaCode: '802' , numbers: '16 numbers'},
            { name: 'Virginia', areaCode: '703' , numbers: '51 numbers'},
            { name: 'Washington', areaCode: '206', numbers: '69 numbers'},
            { name: 'West Virginia', areaCode: '304' , numbers: '66 numbers'},
            { name: 'Wisconsin', areaCode: '414' , numbers: '89 numbers'},
            { name: 'Wyoming', areaCode: '307' , numbers: '23 numbers'}
    ])
    // console.log(width);
    // console.log(height);
  return (
    <View style={{flex:1, }}>
        <View style={styles.headingContainer} >
            <View style={{flexDirection: 'row',}}  >
            <IconButton icon={'chevron-left'} iconColor={COLORS.bgColor} size={30} onPress={()=> navigation.goBack()} />
            <View style={{justifyContent: 'center'}} >
            <Text style={{fontSize: 20,fontWeight: '600', color:COLORS.bgColor }} >US</Text>
            <Text style={{fontSize: 16,}}>Select Area</Text>
            </View>
            </View>
        </View>
        <View style={{ alignItems: 'center'}} >

        <TextInput
          label={'Search'}
          mode="outlined"
          style={{width: '80%', height: 35}}
          keyboardType="default"
          activeOutlineColor={COLORS.bgColor}
          underlineColor={COLORS.bgColor}
          outlineColor={COLORS.borderColor}
          placeholderTextColor={COLORS.borderColor}
          placeholder='Search Numbers'
            // onChangeText={handleSearch}
            // value={searchInput}
          />
          <FlatList style={{width:'80%'}} data={areaData} renderItem={({item})=>{
            return(
                <CountriesCard text1Style={{fontSize: 17, fontWeight: '600', color: COLORS.black}} text2Style={{fontSize: 12, fontWeight: '600'}} name={item.name} code={item.areaCode} number={item.numbers} />
            )
          }} />
          {/* <CountriesCard name={'Pakistan'} code={'+92'} number={'123432445345'} /> */}
          </View>
    </View>
  )
}

export default AreaNumbers

const styles = StyleSheet.create({
    headingContainer: {
        backgroundColor: COLORS.textColor,
        width: width,
        paddingVertical: width/20,
        paddingTop: width/15,
        // justifyContent: 'center',
        // alignItems: 'center',
    }
})