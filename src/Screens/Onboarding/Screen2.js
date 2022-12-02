import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

import CustomIcon from "../../components/Icon";

const image = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM0K9MzvwuJjjxSBKL9E3EdM4VyiTX83Mu0g&usqp=CAU",
};
const logo = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCAnTqdlmFS3igd1XgdmjB46ZqiQHw7UnxhQ&usqp=CAU",
};
const Screen2 = () => {
  return (
    <View style={Styles.container}>
      <ImageBackground style={Styles.image} source={image}>
        <View style={Styles.View1}>
          <Image style={Styles.logo} source={logo} />
          <Text style={Styles.Skip}>Skip</Text>
          <CustomIcon name={"arrow-ios-forward-outline"} color={"white"} />
        </View>
        <View style={Styles.View2}>
          <Text style={Styles.Training}>No Excuses.</Text>
          <View>
            <Text style={Styles.Description}>
              Take advantage of our Free Training Programs from Certified
              Trainers around the world 2.
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Screen2;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    flex: 1,
  },
  logo: {
    height: 45,
    width: 250,
  },
  View1: {
    marginTop: "20%",
    marginLeft: 20,
    display: "flex",
    flexDirection: "row",
  },
  Skip: {
    fontSize: 20,
    color: "white",
    marginLeft: 20,
  },
  Training: {
    fontWeight: "bold",
    fontSize: 22,
    color: "white",
  },
  View2: {
    alignItems: "center",
    marginTop: "70%",
  },
  Description: {
    fontWeight: "400",
    fontSize: 20,
    color: "white",
    width: 300,
    marginTop: 10,
  },
});
