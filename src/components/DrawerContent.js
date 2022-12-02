import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Divider } from "react-native-elements";

const logo = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCAnTqdlmFS3igd1XgdmjB46ZqiQHw7UnxhQ&usqp=CAU",
};
const CustomDrawerContent = (props) => {
  return (
    <SafeAreaView>
      <View>
        <Image
          style={{
            width: 220,
            height: 180,
          }}
          source={logo}
        />
      </View>

      <View>
        <TouchableOpacity style={styles.drawerItem}>
          <Text style={styles.drawerItemText}>My Workouts List</Text>
        </TouchableOpacity>
        <Divider style={styles.divider} />
        <TouchableOpacity style={styles.drawerItem}>
          <Text style={styles.drawerItemText}>Text 2</Text>
        </TouchableOpacity>
        <Divider style={styles.divider} />
        <TouchableOpacity style={styles.drawerItem}>
          <Text style={styles.drawerItemText}>Text 3</Text>
        </TouchableOpacity>
        <Divider style={styles.divider} />
        <TouchableOpacity style={styles.drawerItem}>
          <Text style={styles.drawerItemText}>Text 4</Text>
        </TouchableOpacity>
        <Divider style={styles.divider} />
        <TouchableOpacity style={styles.drawerItem}>
          <Text style={styles.drawerItemText}>Text 5</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  drawerItem: {
    marginTop: -2,
    width: "100%",
    height: 50,
    paddingLeft: 10,
    justifyContent: "center",
  },
  drawerItemText: {
    fontSize: 14,
    color: "grey",
    fontWeight: "bold",
  },
  divider: {
    marginTop: 10,
    width: "90%",
  },
});
