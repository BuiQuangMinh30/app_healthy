import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import moduleName from "../../Screens/Onboarding/OnboardingScreens";
import OnboardingScreens from "../../Screens/Onboarding/OnboardingScreens";
import MainScreen from "../../Screens/MainScreen";
import SignUp from "../../Screens/SignUp";
import Login from "../../Screens/Login";
import DrawerNav from "../drawer/MainDrawer";

const Stack = createStackNavigator();
const GeneralRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"OnboardingScreens"}
        component={OnboardingScreens}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name={"MainScreen"}
        component={MainScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name={"SignUp"}
        component={SignUp}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name={"Login"}
        component={Login}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name={"DrawerNav"}
        component={DrawerNav}
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default GeneralRoutes;
