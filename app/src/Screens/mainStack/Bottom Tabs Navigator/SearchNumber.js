import {StyleSheet,TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-paper';
import COLORS from '../../../../Config/Colors';
import Dimension from '../../../../Config/Dimension';
import { useState } from 'react';
import CountryPicker from 'react-native-country-picker-modal';
const {width, height} = Dimension

const SearchNumber = ({navigation}) => {
  // navigation.setOptions({

  //   tabBarIcon : ()=>{
  //     return <Icon source={'home-outline'} size={25} color={COLORS.bgColor} />
  //   }
  // });

  //CountryPicker
  let [isPickerVisible, setPickerVisible] = useState(false);
  let [region, setRegion] = useState(null);
  const [countryCode, setCountryCode] = useState('FR');
  const [country, setCountry] = useState(null);
  const [withCountryNameButton, setWithCountryNameButton] = useState(true);

  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(true);
  const [withFilter, setWithFilter] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(false);
  const [withCallingCode, setWithCallingCode] = useState(true);
  // let [contryCode,setContryCode] = useState(null)
  const onSelect = country => {
    setCountryCode(country.cca2);
    setCountry(country);
    if (country.callingCode == '1') {
      navigation.navigate('areaNumbers');
    }
  };
  // CountryPicker
  return (
    <View style={{flex: 1}}>
      <View style={{height: height/6, backgroundColor:COLORS.textColor, justifyContent: 'center', paddingHorizontal: width/12 }} >
        <Text style={{color: COLORS.bgColor, fontWeight: '600', fontSize:24 }} > Search Numbers </Text>
      </View>
      {/* <View style={{justifyContent: 'center', alignItems: 'center'}} > */}
      <View
        style={{
            justifyContent: 'center',
            alignItems: 'center',
          // gap: 15,
          // marginTop: 50,
          
        }}>
        <Text
          style={{color: '#000000', paddingVertical: '5%', paddingTop: height/18 }}>
          Phone Numbers from 103+ Countries
        </Text>
        <TouchableOpacity
          style={styles.CountryPickerContainer}
          onPress={() => setPickerVisible(prev => !prev)}>
          <CountryPicker
            {...{
                countryCode,
                withFilter,
                withFlag,
                withCountryNameButton,
              withAlphaFilter,
              withCallingCode,
              withEmoji,
              onSelect,
              region,
            }}
            visible={isPickerVisible}
            />
          {/* <Text>{country?.name}</Text> */}
          <Text>{` (+${country ? country.callingCode : countryCode})`} </Text>
          <Icon source={'chevron-down'} size={25} />
        </TouchableOpacity>
      </View>
     {/* </View> */}
    </View>
  );
};

export default SearchNumber;

const styles = StyleSheet.create({
    CountryPickerContainer: {
        borderColor: COLORS.borderColor,
        borderWidth: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        // justifyContent:'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: width/1.1
      },
});
