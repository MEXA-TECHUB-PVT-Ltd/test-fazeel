import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { IconButton } from 'react-native-paper';
import COLORS from '../../Config/Colors';
import { useNavigation } from '@react-navigation/native';

const Header = ({icon, text, number, style}) => {
  let navigation = useNavigation()

  return (
    <View style={[styles.headerContainer, style]}>
      <IconButton
        icon={icon}
        size={34}
        iconColor={COLORS.bgColor}
        onPress={() => navigation.goBack()}
        style={{margin: 0}}
      />
      <View>
      <Text
        style={{
          color: COLORS.bgColor,
          fontSize: 22,
          fontWeight: 600,
          // lineHeight: 24,
        }}>
        {text}
      </Text>
     {number && <Text style={{
          color: COLORS.grayTextColor,
          fontSize: 12,
          fontWeight: 500,
          // lineHeight: 24,
        }}>
        {number}
      </Text>}
      </View>
      
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    headerContainer:{
        // flex: 3,
        // borderWidth: 1,
        // borderColor: COLORS.bgColor,
        flexDirection: 'row',
        alignItems: 'center',
    },
});
