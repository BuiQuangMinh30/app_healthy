import React from "react";
import Swiper from "react-native-swiper";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";

const OnboardingScreens = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <StatusBar backgroundColor={"black"} />
      <Swiper>
        <Screen1 navigation={navigation} />
        <Screen2 navigation={navigation} />
        <Screen3 navigation={navigation} />
        <Screen4 navigation={navigation} />
      </Swiper>
    </View>
  );
};
export default OnboardingScreens;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
