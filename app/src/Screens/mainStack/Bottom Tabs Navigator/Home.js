import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import { HomeScreenData, countriesWithFlags  } from '../../../../Config/Data';
import {Icon} from 'react-native-paper';
import COLORS from '../../../../Config/Colors';
import Dimension from '../../../../Config/Dimension';
import NumberDetailsCard from '../../../Components/NumberDetailsCard';

var {weight, height} = Dimension;

const Home = ({navigation}) => {
  let [countries, setCountries] = useState(countriesWithFlags);

  let [searchInput, setSearchInput] = useState('');

  let [numberArray, setNumberArray] = useState([
    {
      id: 1,
      'Phone Number': '+112089908760',
      'Country Name': 'United States (US)',
      'Expiry Date': '14/02/2024',
      'Number Type': 'Local',
      'Subscription Amount': '$34',
      Capabilities: 'SMS',
      'Subscribed Plan': 'Monthly',
      'Subscription Date': '11/01/2024',
    },
    {
      id: 2,
      'Phone Number': '+12025550123',
      'Country Name': 'Canada',
      'Expiry Date': '22/05/2025',
      'Number Type': 'Toll-Free',
      'Subscription Amount': '$49',
      Capabilities: 'Voice',
      'Subscribed Plan': 'Monthly',
      'Subscription Date': '05/03/2024',
    },
    {
      id: 3,
      'Phone Number': '+4402079460501',
      'Country Name': 'United Kingdom',
      'Expiry Date': '30/09/2023',
      'Number Type': 'International',
      'Subscription Amount': '$45',
      Capabilities: 'SMS, Voice',
      'Subscribed Plan': 'Monthly',
      'Subscription Date': '18/12/2023',
    },
    {
      id: 4,
      'Phone Number': '+61025550123',
      'Country Name': 'Australia',
      'Expiry Date': '12/08/2023',
      'Number Type': 'Local',
      'Subscription Amount': '$39',
      Capabilities: 'SMS, Voice',
      'Subscribed Plan': 'Monthly',
      'Subscription Date': '27/05/2023',
    },
    {
      id: 5,
      'Phone Number': '+81345678901',
      'Country Name': 'Japan',
      'Expiry Date': '01/11/2022',
      'Number Type': 'Local',
      'Subscription Amount': '¥3500',
      Capabilities: 'Voice',
      'Subscribed Plan': 'Monthly',
      'Subscription Date': '15/09/2022',
    },
    {
      id: 6,
      'Phone Number': '+8612345678901',
      'Country Name': 'China',
      'Expiry Date': '05/06/2023',
      'Number Type': 'Local',
      'Subscription Amount': '¥300',
      Capabilities: 'SMS',
      'Subscribed Plan': 'Monthly',
      'Subscription Date': '22/04/2023',
    },
    {
      id: 7,
      'Phone Number': '+912345678901',
      'Country Name': 'India',
      'Expiry Date': '28/03/2024',
      'Number Type': 'Local',
      'Subscription Amount': '₹500',
      Capabilities: 'SMS, Voice',
      'Subscribed Plan': 'Monthly',
      'Subscription Date': '09/01/2024',
    },
    {
      id: 8,
      'Phone Number': '+5512345678901',
      'Country Name': 'Brazil',
      'Expiry Date': '10/10/2023',
      'Number Type': 'Local',
      'Subscription Amount': 'R$70',
      Capabilities: 'SMS, Voice',
      'Subscribed Plan': 'Monthly',
      'Subscription Date': '23/08/2023',
    },
    {
      id: 9,
      'Phone Number': '+2712345678901',
      'Country Name': 'South Africa',
      'Expiry Date': '17/12/2024',
      'Number Type': 'Local',
      'Subscription Amount': 'R250',
      Capabilities: 'SMS',
      'Subscribed Plan': 'Monthly',
      'Subscription Date': '04/10/2024',
    },
    {
      id: 10,
      'Phone Number': '+5412345678901',
      'Country Name': 'Argentina',
      'Expiry Date': '19/05/2023',
      'Number Type': 'Local',
      'Subscription Amount': '$400',
      Capabilities: 'Voice',
      'Subscribed Plan': 'Monthly',
      'Subscription Date': '02/03/2023',
    },
    {
      id: 11,
      'Phone Number': '+112089908760',
      'Country Name': 'United States(US)',
      'Expiry Date': '14/02/2024',
      'Number Type': 'Local',
      'Subscription Amount': '$34',
      Capabilities: 'SMS',
      'Subscribed Plan': 'Monthly',
      'Subscription Date': '11/01/2024',
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.subscriptionDetailsContainer}>
        <View style={styles.subscriptionDottedContainer}>
          {HomeScreenData.map((item, index) => {
            if (index === 0) {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    // justifyContent: 'center',
                    alignItems: 'center',
                    key: Object.keys(item).map(key => key),
                    gap: 20,
                  }}>
                  {Object.keys(item).map(key => (
                    <View key={key}>
                      <Text style={[styles.subscriptionText, {fontSize: 17}]}>
                        {item[key]}
                      </Text>
                      <Text style={[styles.subscriptionText, {fontSize: 13}]}>
                        {key.split(' ')[0]}
                      </Text>
                      <Text style={[styles.subscriptionText, {fontSize: 13}]}>
                        {key.split(' ')[1]}
                      </Text>
                    </View>
                  ))}
                </View>
              );
            }
          })}
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F5F5F5',
        }}>
        {numberArray.length === 0 ? (
          <Image
            source={require('../../../assets/Logos/HomeScreen.png')}
            style={{resizeMode: 'contain', marginTop: height / 7}}
          />
        ) : (
          <FlatList
            data={numberArray}
            keyExtractor={item => item.id}
            ListFooterComponent={<View style={{height: 150}} />}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <NumberDetailsCard
                  number={item['Phone Number']}
                  numberType={item['Number Type']}
                  countryName={item['Country Name']}
                  subscribedPlan={item['Subscribed Plan']}
                  subscriptionAmount={item['Subscription Amount']}
                  expiryDate={item['Expiry Date']}
                  onPress={() => navigation.navigate('numberDetails', item)}
                />
              );
            }}
          />
        )}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subscriptionDetailsContainer: {
    // marginTop: 50,
    width: '100%',
    // height: 130,
    backgroundColor: COLORS.bgColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subscriptionDottedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Dimension.width / 1.1,
    // height: 95,
    paddingVertical: 20,
    // paddingHorizontal: 25,
    marginVertical: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'white',
    gap: 20,
  },
  subscriptionText: {
    color: COLORS.textColor,
    fontWeight: '500',
    fontSize: 10,
    textAlign: 'center',
  },
});
