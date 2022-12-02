import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ButtomNavigator from "../components/BottomNavigator";

const HomePage = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <ButtomNavigator />
    </SafeAreaView>
  );
};

export default HomePage;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    backgroundColor: "#f7f8fa",
  },
});
