import React from "react";
import { View, Text, SafeAreaView } from "react-native";

import TextInput from "../components/TextInput";
import ScreenTitle from "../components/ScreenTitle";
import Spacer from "../components/Spacer";
import TouchableButton from "../components/TouchableButton";
import { Content } from "native-base";
import { CheckBox } from "@ui-kitten/components";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <ScreenTitle text={"Login"} />
      <Spacer height={100} />
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
        placeholder={"********"}
        placeholderTextColor={"grey"}
        autoCapitalize={"none"}
      />

      <Spacer height={50} />
      <CheckBox style={{ margin: 2, marginLeft: 15 }}>
        Remember login info
      </CheckBox>

      <Spacer height={50} />
      <TouchableButton title={"Login"} textStyle={{ color: "white" }} />
      <Spacer height={20} />
      <Text
        style={{
          fontSize: 15,
          textAlign: "center",
          color: "grey",
        }}
      >
        I don't have account
        <Text
          style={{ color: "#00F" }}
          onPress={() => navigation.navigate("SignUp")}
        >
          Sign up now
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default Login;
