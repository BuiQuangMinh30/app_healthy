import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "../stack/HomeStack";
import CustomDrawerContent from "../../components/DrawerContent";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Screens = ({ style }) => {
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack.Navigator
        initialRouteName="HomeStack"
        screenOptions={{
          headerShown: false,
          animationEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Drawer.Screen name="HomeStack" component={HomeStack} />
      </Stack.Navigator>
    </Animated.View>
  );
};

const DrawerNav = (props) => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });
  const animatedStyle = { borderRadius, transform: [{ scale }] };
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      unnmountinactiveRoutes={false}
      initialRouteName="HomeStack"
      drawerContent={(props) => {
        setProgress(props.progress);
        return <CustomDrawerContent {...props} />;
      }}
      drawerType="slide"
    >
      <Drawer.Screen name="Screens">
        {(props) => <Screens {...props} style={animatedStyle} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNav;

DrawerNav.navigationOption = {
  title: "More Option",
  headerStyle: {
    backgroundColor: "#F5F9FC",
  },
  headerTintColor: "#B0C8EC",
  headertitleStyle: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
};

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
  },
});
