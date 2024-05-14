import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Dimension from '../../../../Config/Dimension';
import {IconButton} from 'react-native-paper';
import COLORS from '../../../../Config/Colors';
import CustomButton from '../../../Components/CustomButton';
import Header from '../../../Components/Header';

const {width, height} = Dimension;
const NumberDetails = ({navigation, route}) => {
  // hello
  let item = route.params;
  let number = item['Phone Number'];
  return (
    <View style={styles.mainContainer}>
      <Header text={'Number Details'} icon={'chevron-left'}  />
      {/* <View style={styles.headerContainer} >
            <IconButton icon={'chevron-left'} size={34} iconColor={COLORS.bgColor} onPress={()=> navigation.goBack()} style={{margin: 0}} />
            <Text style={{color: COLORS.bgColor, fontSize: 22, fontWeight: 600, lineHeight: 24}} >Number Details</Text>
        </View> */}
      <View style={styles.detailsContainer}>
        <View style={styles.detailsSubContainer}>
          <Text style={styles.key}>Phone Number</Text>
          <Text style={styles.value}>{item['Phone Number']}</Text>
        </View>
        <View style={styles.detailsSubContainer}>
          <Text style={styles.key}>Country Name</Text>
          <Text style={styles.value}>{item['Country Name']}</Text>
        </View>
        <View style={styles.detailsSubContainer}>
          <Text style={styles.key}>Number Type</Text>
          <Text style={styles.value}>{item['Number Type']}</Text>
        </View>
        <View style={styles.detailsSubContainer}>
          <Text style={styles.key}>Capabilities</Text>
          <Text style={styles.value}>{item['Capabilities']}</Text>
        </View>
        <View style={[styles.detailsSubContainer, {paddingVertical: 25}]}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '700',
              color: COLORS.bgColor,
              textAlign: 'left',
            }}>
            Subscription Details
          </Text>
        </View>
        <View>
          <View style={styles.detailsSubContainer}>
            <Text style={styles.key}>Subscribed Plan</Text>
            <Text style={styles.value}>{item['Subscribed Plan']}</Text>
          </View>
          <View style={styles.detailsSubContainer}>
            <Text style={styles.key}>Subscription Amount</Text>
            <Text style={styles.value}>{item['Subscription Amount']}</Text>
          </View>
          <View style={styles.detailsSubContainer}>
            <Text style={styles.key}>Subscription Date</Text>
            <Text style={styles.value}>{item['Subscription Date']}</Text>
          </View>
          <View style={styles.detailsSubContainer}>
            <Text style={styles.key}>Expiry Date</Text>
            <Text style={styles.value}>{item['Expiry Date']}</Text>
          </View>
        </View>
      </View>

      <View style={styles.btnContainer}>
        <CustomButton
          textStyle={[styles.btnTextStyle, {color: COLORS.textColor}]}
          containerStyle={[
            styles.btnContainerStyle,
            {backgroundColor: COLORS.bgColor},
          ]}
          onPress={()=> navigation.navigate('messagesScreen', {number})}
          >
          View Messages
        </CustomButton>
        <CustomButton
          textStyle={[styles.btnTextStyle, {color: COLORS.bgColor}]}
          containerStyle={[
            styles.btnContainerStyle,
            {borderColor: COLORS.bgColor, borderWidth: 1.4},
          ]}
          mode={true}>
          Cancel Subscription
        </CustomButton>
      </View>
    </View>
  );
};

export default NumberDetails;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: height / 12,
    paddingHorizontal: width / 14,
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    // flex: 3,
    // borderWidth: 1,
    // borderColor: COLORS.bgColor,
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsContainer: {
    paddingVertical: 20,
    // borderColor: COLORS.bgColor,
    // borderWidth: 1,
  },
  detailsSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  key: {
    lineHeight: 26,
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.black,
    textAlign: 'left',
  },
  value: {
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'right',
  },
  btnContainer: {
    // borderColor: COLORS.black,
    // borderWidth: 1,
    // paddingBottom: 30,
    height: height / 6,
    justifyContent: 'space-between',
  },
  btnTextStyle: {
    fontSize: 16,
    fontWeight: '600',
  },
  btnContainerStyle: {
    borderRadius: 100,
    padding: 14,
  },
});
