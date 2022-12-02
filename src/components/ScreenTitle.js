import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ScreenTitle = ({ style, text }) => {
  return <Text style={[Styles.textStyle, style]}>{text}</Text>;
};

export default ScreenTitle;

const Styles = StyleSheet.create({
  textStyle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
});
