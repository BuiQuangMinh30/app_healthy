import React from "react";
import { View, Text, SafeAreaView } from "react-native";

import TextInput from "../components/TextInput";
import ScreenTitle from "../components/ScreenTitle";
import Spacer from "../components/Spacer";
import TouchableButton from "../components/TouchableButton";
import { Content } from "native-base";

const SignUp = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <ScreenTitle text={"Sign Up"} />
      <Spacer height={100} />
      <TextInput
        label={"Full Name"}
        name={"email"}
        placeholder="Your Full Name"
        placeholderTextColor={"grey"}
        autoCapitalize={"none"}
      />
      <Spacer height={20} />
      <TextInput
        label={"Email"}
        name={"email"}
        placeholder={"Your Email"}
        placeholderTextColor={"grey"}
        autoCapitalize={"none"}
      />
      <Spacer height={20} />
      <TextInput
        label={"Password"}
        name={"email"}
        placeholder="********"
        placeholderTextColor={"grey"}
        // placeholder="useless placeholder"
        autoCapitalize={"none"}
      />
      <Spacer height={20} />
      <TextInput
        label={"Re-enter Password"}
        name={"email"}
        placeholder={"********"}
        placeholderTextColor={"grey"}
        autoCapitalize={"none"}
      />
      <Spacer height={50} />
      <TouchableButton title={"SignUp"} textStyle={{ color: "white" }} />
    </SafeAreaView>
  );
};

export default SignUp;
