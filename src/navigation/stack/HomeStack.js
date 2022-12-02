import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../../Screens/HomePage";
import CustomIcon from "../../components/Icon";

const Stack = createStackNavigator();
const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"HomePage"}
        component={HomePage}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "white",
          },
          hederLeft: () => (
            <View style={Styles.headerLeftImage}>
              <Image style={Styles.headerLeft} />
              <View style={{ marginLeft: 10 }}>
                <Text style={Styles.headerTitleStyle}>Admin</Text>
              </View>
            </View>
          ),
          headerRight: () => (
            <View style={Styles.headerRightView}>
              <TouchableOpacity>
                <CustomIcon name={"search-outline"} size={35} color={"grey"} />
              </TouchableOpacity>
              <TouchableOpacity onPress={navigation.toggleDrawer()}>
                <CustomIcon
                  name={"more-vertical-outline"}
                  size={35}
                  color={"blue"}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

const Styles = StyleSheet.create({
  headerLeft: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    backgroundColor: "grey",
  },
  headerLeftImage: {
    height: 40,
    width: 40,
    borderRadius: 40,
    marginLeft: 15,
    flexDirection: "row",
  },
  headerTitleStyle: {
    color: "black",
    fontSize: 17,
    fontWeight: "bold",
    width: 100,
  },
  headerRightView: {},
});
