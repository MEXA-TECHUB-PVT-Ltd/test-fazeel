import {FlatList, Pressable,Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {HomeScreenData, countriesWithFlags} from '../../../Config/Data';
import {TextInput} from 'react-native-paper';
import COLORS from '../../../Config/Colors';
import CountriesCard from '../../Components/CountriesCard';
import Practice from '../../../../Practice';

const Home = () => {
  let [countries, setCountries] = useState(countriesWithFlags);

  let [searchInput, setSearchInput] = useState('');

  let handleSearch = input => {
    setSearchInput(input);
    let filteredData = countriesWithFlags.filter(item => {
      return (
        item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.abbreviation.toLowerCase().includes(searchInput.toLowerCase())
      );
    });
    setCountries(filteredData);
  };
  let searchFunction = () => {};
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
                      <Text style={[styles.subscriptionText, {fontSize: 20}]}>
                        {item[key]}
                      </Text>
                      <Text style={[styles.subscriptionText, {fontSize: 16}]}>
                        {key.split(' ')[0]}
                      </Text>
                      <Text style={[styles.subscriptionText, {fontSize: 16}]}>
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
          // gap: 15,
          // marginTop: 50,
        }}>
        <Text style={{color: '#000000', paddingVertical: '5%', paddingTop: '10%'}}>
          Phone Numbers from 103+ Countries
        </Text>
        
        <TextInput
          label={'Search'}
          mode="outlined"
          style={{width: '80%', height: 35}}
          keyboardType="default"
          activeOutlineColor={COLORS.bgColor}
          underlineColor={COLORS.bgColor}
          onChangeText={handleSearch}
          value={searchInput}
        />
        <View style={{width: '85%'}}>
          <FlatList
          style ={{height : '90%',}}
            ItemSeparatorComponent={<View style={{height: 10}}></View>}
            data={countries}
            ListFooterComponent={()=>{
              return( <View style={{height: 250}} />)
            }}
            renderItem={({item}) => {
              return (
                <CountriesCard
                  name={item.name}
                  abbrevation={item.abbreviation}
                />
              );
            }}
          />
        </View>
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
    backgroundColor: '#585CF1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subscriptionDottedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // width: 369,
    // height: 95,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'white',
    gap: 20,
  },
  subscriptionText: {
    color: '#ffff',
    fontWeight: '500',
    textAlign: 'center',
  },
});
