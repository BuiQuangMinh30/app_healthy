import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import TouchableButton from "../components/TouchableButton";
import Spacer from "../components/Spacer";

const logo = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCAnTqdlmFS3igd1XgdmjB46ZqiQHw7UnxhQ&usqp=CAU",
};
const MainScreen = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.screenTitleView}>
        <Image
          source={logo}
          style={{
            width: 250,
            height: 250,
          }}
        />
        <Text style={Styles.desctiption}>Welcome to Healthy App</Text>
      </View>
      <Spacer height={60} />
      <View>
        <TouchableButton
          title={"Sign Up"}
          textStyle={{
            color: "white",
          }}
          onPress={() => navigation.navigate("SignUp")}
        />
        <Spacer height={20} />
        <TouchableButton
          title={"Log In"}
          textStyle={{
            color: "white",
          }}
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
};

export default MainScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  screenTitleView: {
    flex: 0.5,
    width: "100%",
    justifyContent: "flex-start",
    top: 70,
    alignItems: "center",
    paddingHorizontal: 25,
  },
  desctiption: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
