import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Icon } from "react-native-elements";

const ButtomNavigator = () => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity>
        <Icon
          name="plus"
          type="font-awesome-5"
          color={"#226ddcff"}
          size={30}
          containerStyle={{ alignSelf: "center" }}
          reverse
          style={Styles.floatingButton}
        />
      </TouchableOpacity>
      <View style={Styles.bottomBar}>
        <TouchableOpacity style={Styles.barItemView}>
          <Icon
            name="home"
            type="material-community"
            color={"#696969"}
            size={30}
          />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.barItemView}>
          <Icon
            name="laptop"
            type="material-community"
            color={"#696969"}
            size={30}
          />
          <Text>Tutorial</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.barItemView}>
          <Text style={Styles.PostButton}>Create Post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.barItemView}>
          <Icon
            name="bell-outline"
            type="material-community"
            color={"#696969"}
            size={30}
          />
          <Text>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.barItemView}>
          <Icon name="menu" type="faether" color={"#696969"} size={30} />
          <Text>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ButtomNavigator;

const Styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: "flex-end",
    backgroundColor: "yellow",
  },
  bottomBar: {
    backgroundColor: "#f2f7fcff",
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  barItemView: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
  floatingButton: {
    position: "absolute",
    alignSelf: "center",
    backgroundColor: "#f8f4f4",
    width: 70,
    height: 70,
    borderRadius: 25,
    zIndex: 10,
    bottom: 30,
  },
  PostButton: {
    color: "#1b6adf",
    marginTop: 3,
    marginLeft: 20,
    fontWeight: "bold",
  },
  Text: {
    color: "#696969",

    marginTop: 3,
  },
});
