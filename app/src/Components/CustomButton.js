import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { Children } from "react";
import { Icon } from "react-native-paper";

const CustomButton = ({ containerStyle ,onPress, mode, children, textStyle, icon, iconSize, iconColor, }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        containerStyle,
        mode && {backgroundColor: 'transparent'} 
        ,pressed && { opacity: 0.5, borderRadius: 100 },
      ]}
      >
        {icon ? <Icon source={icon} size={iconSize} color={iconColor} /> :<Text style={textStyle} >{children}</Text> }
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 8,
    // borderRadius: 4
  },

});
